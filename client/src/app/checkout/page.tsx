import { redirect } from 'next/navigation';
import { StripeForm } from '@/ui/organisms/StripeForm';
import { getCookieOrder } from '@/util/order';
import { stripe } from '@/util/stripe';

export const metadata = {
  title: 'Checkout',
  description: 'Checkout page',
};

export const dynamic = 'force-dynamic';

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
      id={order.id}
      items={order.items}
      total={order.total}
    />
  );
}
