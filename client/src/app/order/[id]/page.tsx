import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import { getOrderById } from '@/api/order';
import { stripe } from '@/util/stripe';
import { OrderSummary } from '@/ui/organisms/OrderSummary';

interface Params {
  id: string;
}

interface SearchParams {
  payment_intent?: string;
}

interface Props {
  params: Params;
  searchParams: SearchParams;
}

export const metadata = {
  title: 'Order',
  description: 'Order page',
};

export default async function OrderPage({
  params: { id },
  searchParams: { payment_intent },
}: Props) {
  const order = await getOrderById(id);
  if (!order) {
    return notFound();
  }

  const paymentIntent = payment_intent
    ? await stripe.paymentIntents.retrieve(payment_intent)
    : null;

  if (paymentIntent && paymentIntent.metadata.orderId !== id) {
    return redirect(`/order/${id}`);
  }

  return (
    <main className="relative lg:min-h-full">
      <div className="h-80 overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12">
        <Image
          width={600}
          height={800}
          src="https://tailwindui.com/img/ecommerce-images/confirmation-page-06-hero.jpg"
          alt="TODO"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <OrderSummary order={order} paymentIntentStatus={paymentIntent?.status} />
    </main>
  );
}
