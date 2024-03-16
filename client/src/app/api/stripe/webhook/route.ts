import { type NextRequest, NextResponse } from 'next/server';
import { executeQuery } from '@/util/gql';
import { getErrorMessage } from '@/util/error';
import { stripe } from '@/util/stripe';
import { OrderUpdateStatusDocument } from '@/gql/graphql';
import Stripe from 'stripe';

export const POST = async (req: NextRequest) => {
  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ result: 'failure', data: 'Stripe secret not set' }, { status: 400 });
  }
  const stripeSignature = req.headers.get('stripe-signature');
  if (!stripeSignature) {
    return NextResponse.json(
      { result: 'failure', data: 'Stripe signature not set' },
      { status: 400 },
    );
  }

  try {
    const eventData = await req.text();
    const event = stripe.webhooks.constructEvent(
      eventData,
      stripeSignature,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
    if (!('metadata' in event.data.object)) {
      return Response.json({ result: 'failure', data: 'No metadata' }, { status: 400 });
    }

    const orderId = event.data.object.metadata?.orderId;
    if (!orderId) {
      return Response.json({ result: 'failure', data: 'No orderId metadata' }, { status: 400 });
    }

    switch (event.type) {
      case 'payment_intent.canceled':
        await executeQuery({
          query: OrderUpdateStatusDocument,
          variables: { id: orderId, status: 'CANCELLED' },
        });
        return NextResponse.json({ result: 'success', data: 'Webhook succeeded' }, { status: 201 });
      case 'payment_intent.payment_failed':
        await executeQuery({
          query: OrderUpdateStatusDocument,
          variables: { id: orderId, status: 'FAILED' },
        });
        return NextResponse.json({ result: 'success', data: 'Webhook succeeded' }, { status: 201 });
      case 'payment_intent.processing':
        await executeQuery({
          query: OrderUpdateStatusDocument,
          variables: { id: orderId, status: 'PROCESSING_PAYMENT' },
        });
        return NextResponse.json({ result: 'success', data: 'Webhook succeeded' }, { status: 201 });
      case 'payment_intent.succeeded':
        await executeQuery({
          query: OrderUpdateStatusDocument,
          variables: { id: orderId, status: 'PAID' },
        });
        return NextResponse.json({ result: 'success', data: 'Webhook succeeded' }, { status: 201 });
      default:
        return NextResponse.json({ result: 'failure', data: 'Unexpected event' }, { status: 400 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ result: 'failure', data: getErrorMessage(error) }, { status: 400 });
  }
};
