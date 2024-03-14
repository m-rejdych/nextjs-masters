import { redirect } from 'next/navigation';
import Stripe from 'stripe';
import { StripeForm } from '@/ui/organisms/StripeForm';
import { getCookieOrder } from '@/util/order';

const stripe = new Stripe(process.env.STRIPE_SK as string);

export const metadata = {
  title: 'Checkout',
  description: 'Checkout page',
}

export default async function CheckoutPage() {
  const order = await getCookieOrder();
  if (!order) {
    redirect('/');
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: order.total,
    currency: 'usd',
    metadata: {
      orderId: order.id,
    },
  });

  if (!paymentIntent.client_secret) {
    redirect('/');
  }

  return (
    <StripeForm
      clientSecret={paymentIntent.client_secret}
      items={order.items}
      total={order.total}
    />
  );
}
