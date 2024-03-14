import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useSearchParams } from 'next/navigation';
import { Disclosure } from '@headlessui/react';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import { formatDolars } from '@/util/currency';
import type { OrderItemFragment, OrderFragment } from '@/gql/graphql';

interface Props {
  total: OrderFragment['total'];
  items: OrderItemFragment[];
}

const getErrorMessage = (error: unknown): string =>
  typeof error === 'object' && error && 'message' in error && typeof error.message === 'string'
    ? error.message
    : 'Something went wrong :(';

const TAX_RATE = 0.12 as const;
const SHIPPING = 700 as const;

export const CheckoutForm = ({ total, items }: Props) => {
  const stripe = useStripe();
  const elements = useElements();
  const searchParams = useSearchParams();
  const [, setErrorMessage] = useState<string | null>(null);
  const [, setMessage] = useState<string | null>(null);
  const [, setLoading] = useState(false);

  const taxEstimate = TAX_RATE * total;
  const shippingEstimate = total && SHIPPING;
  const clientSecret = searchParams.get('payment_intent_client_secret');

  useEffect(() => {
    if (!stripe || !clientSecret) return;

    (async () => {
      try {
        const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);
        switch (paymentIntent?.status) {
          case 'succeeded':
            setMessage('Success! Thank you for your payment.');
            break;
          case 'processing':
            setMessage(
              'Your payment is being processed. We will let you know when it is finished.',
            );
            break;
          case 'requires_payment_method':
            setErrorMessage('Payment failed. Please try another payment method.');
            break;
          case 'canceled':
            setErrorMessage('Your payment was cancelled.');
            break;
          case 'requires_confirmation':
            setErrorMessage('Please, confirm your payment.');
            break;
          default:
            setErrorMessage('Something went wrong :(');
            break;
        }
      } catch (error) {
        setErrorMessage(getErrorMessage(error));
      }
    })().catch((error) => setErrorMessage(getErrorMessage(error)));
  }, [stripe, clientSecret]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/checkout`,
        },
      });

      if (error) {
        setErrorMessage(error.message ?? null);
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage(getErrorMessage(error));
      setLoading(false);
    }
  };

  return (
    <main className="lg:flex lg:min-h-full lg:flex-row-reverse lg:overflow-hidden">
      <h1 className="sr-only">Checkout</h1>

      {/* Mobile order summary */}
      <section aria-labelledby="order-heading" className="bg-white px-4 py-6 sm:px-6 lg:hidden">
        <Disclosure as="div" className="mx-auto max-w-lg">
          {({ open }) => (
            <>
              <div className="flex items-center justify-between">
                <h2 id="order-heading" className="text-lg font-medium text-neutral-900">
                  Your Order
                </h2>
                <Disclosure.Button className="font-medium text-primary-600 hover:text-primary-500">
                  {open ? <span>Hide full summary</span> : <span>Show full summary</span>}
                </Disclosure.Button>
              </div>

              <Disclosure.Panel>
                <ul role="list" className="divide-y divide-neutral-200 border-b border-neutral-200">
                  {items.map(({ id, product, size, color, quantity }) => (
                    <li key={id} className="flex space-x-6 py-6">
                      {product.images[0] && (
                        <Image
                          src={product.images[0].url}
                          alt={product.images[0].alt}
                          width={200}
                          height={200}
                          className="h-40 w-40 flex-none rounded-md bg-neutral-200 object-cover object-center"
                        />
                      )}
                      <div className="flex flex-col justify-between space-y-4">
                        <div className="space-y-1 text-sm font-medium">
                          <h3 className="text-neutral-900">{product.name}</h3>
                          <p className="text-neutral-900">{formatDolars(product.price / 100)}</p>
                          <p className="text-neutral-500">Quantity: {quantity}</p>
                          <p className="text-neutral-500">{color.name}</p>
                          <p className="text-neutral-500">{size.type}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <dl className="mt-10 space-y-6 text-sm font-medium text-neutral-500">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd className="text-neutral-900">{formatDolars(total / 100)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Taxes</dt>
                    <dd className="text-neutral-900">{formatDolars(taxEstimate / 100)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Shipping</dt>
                    <dd className="text-neutral-900">{formatDolars(shippingEstimate / 100)}</dd>
                  </div>
                </dl>
              </Disclosure.Panel>

              <p className="mt-6 flex items-center justify-between border-t border-neutral-200 pt-6 text-sm font-medium text-neutral-900">
                <span className="text-base">Total</span>
                <span className="text-base">
                  {formatDolars((total + shippingEstimate + taxEstimate) / 100)}
                </span>
              </p>
            </>
          )}
        </Disclosure>
      </section>

      {/* Order summary */}
      <section
        aria-labelledby="summary-heading"
        className="hidden w-full max-w-md flex-col bg-white lg:flex"
      >
        <h2 id="summary-heading" className="sr-only">
          Order summary
        </h2>

        <ul role="list" className="flex-auto divide-y divide-neutral-200 overflow-y-auto px-6">
          {items.map(({ id, color, size, product, quantity }) => (
            <li key={id} className="flex space-x-6 py-6">
              {product.images[0] && (
                <Image
                  width={200}
                  height={200}
                  src={product.images[0].url}
                  alt={product.images[0].alt}
                  className="h-40 w-40 flex-none rounded-md bg-neutral-200 object-cover object-center"
                />
              )}
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-1 text-sm font-medium">
                  <h3 className="text-neutral-900">{product.name}</h3>
                  <p className="text-neutral-900">{formatDolars(product.price / 100)}</p>
                  <p className="text-neutral-500">Quantity: {quantity}</p>
                  <p className="text-neutral-500">{color.name}</p>
                  <p className="text-neutral-500">{size.type}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="sticky bottom-0 flex-none border-t border-neutral-200 bg-white p-6">
          <dl className="mt-10 space-y-6 text-sm font-medium text-neutral-500">
            <div className="flex justify-between">
              <dt>Subtotal</dt>
              <dd className="text-neutral-900">{formatDolars(total / 100)}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Taxes</dt>
              <dd className="text-neutral-900">{formatDolars(taxEstimate / 100)}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Shipping</dt>
              <dd className="text-neutral-900">{formatDolars(shippingEstimate / 100)}</dd>
            </div>
            <div className="flex items-center justify-between border-t border-neutral-200 pt-6 text-neutral-900">
              <dt>Total</dt>
              <dd className="text-base">
                {formatDolars((total + shippingEstimate + taxEstimate) / 100)}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Checkout form */}
      <section
        aria-labelledby="payment-heading"
        className="flex-auto overflow-y-auto px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-0"
      >
        <h2 id="payment-heading" className="sr-only">
          Payment and shipping details
        </h2>

        <div className="mx-auto max-w-lg lg:pt-16">
          <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button
              type="submit"
              className="mt-6 w-full rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Pay {formatDolars((total + shippingEstimate + taxEstimate) / 100)}
            </button>

            <p className="mt-6 flex justify-center text-sm font-medium text-neutral-500">
              <LockClosedIcon className="mr-1.5 h-5 w-5 text-neutral-400" aria-hidden="true" />
              Payment details stored in plain text
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};
