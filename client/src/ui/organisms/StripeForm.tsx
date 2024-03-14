'use client';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutForm } from '@/ui/molecules/checkout/CheckoutForm';
import type { OrderItemFragment, OrderFragment } from '@/gql/graphql';

interface Props {
  clientSecret: string;
  total: OrderFragment['total'];
  items: OrderItemFragment[];
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK as string);

export const StripeForm = ({ clientSecret, total, items }: Props) => {
  return (
    <Elements stripe={stripePromise} options={{ clientSecret, appearance: { theme: 'stripe' } }}>
      <CheckoutForm items={items} total={total} />
    </Elements>
  );
};
