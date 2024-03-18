import Image from 'next/image';
import { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { Disclosure } from '@headlessui/react';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import { formatDolars } from '@/util/currency';
import { getTaxValue, getShippingValue, getTotalOrderValue } from '@/util/products';
import { getErrorMessage } from '@/util/error';
import type { OrderItemFragment, OrderFragment } from '@/gql/graphql';

interface Props {
  id: OrderFragment['id'];
  total: OrderFragment['total'];
  items: OrderItemFragment[];
}

export const CheckoutForm = ({ id, total, items }: Props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const taxValue = formatDolars(getTaxValue(total) / 100);
  const shippingValue = formatDolars(total && getShippingValue() / 100);
  const totalOrderValue = formatDolars(total && getTotalOrderValue(total) / 100);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/order/${id}`,
        },
      });

      if (error) {
        setErrorMessage(error.message ?? null);
      }
    } catch (error) {
      setErrorMessage(getErrorMessage(error));
    }

    setLoading(false);
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
                  {items.map(({ id, product, size, color, quantity, total: itemTotal }) => (
                    <li key={id} className="flex space-x-6 py-6">
                      {product.images[0] && (
                        <Image
                          src={product.images[0].url}
                          alt={product.images[0].alt}
                          width={400}
                          height={400}
                          className="h-40 w-40 flex-none rounded-md bg-neutral-200 object-cover object-center"
                        />
                      )}
                      <div className="flex flex-col justify-between space-y-4">
                        <div className="space-y-1 text-sm font-medium">
                          <h3 className="text-neutral-900">{product.name}</h3>
                          <p className="text-neutral-900">{formatDolars(itemTotal / 100)}</p>
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
                    <dd className="text-neutral-900">{taxValue}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Shipping</dt>
                    <dd className="text-neutral-900">{shippingValue}</dd>
                  </div>
                </dl>
              </Disclosure.Panel>

              <p className="mt-6 flex items-center justify-between border-t border-neutral-200 pt-6 text-sm font-medium text-neutral-900">
                <span className="text-base">Total</span>
                <span className="text-base">{totalOrderValue}</span>
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
          {items.map(({ id, color, size, product, quantity, total: itemTotal }) => (
            <li key={id} className="flex space-x-6 py-6">
              {product.images[0] && (
                <Image
                  width={400}
                  height={400}
                  src={product.images[0].url}
                  alt={product.images[0].alt}
                  className="h-40 w-40 flex-none rounded-md bg-neutral-200 object-cover object-center"
                />
              )}
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-1 text-sm font-medium">
                  <h3 className="text-neutral-900">{product.name}</h3>
                  <p className="text-neutral-900">{formatDolars(itemTotal / 100)}</p>
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
              <dd className="text-neutral-900">{taxValue}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Shipping</dt>
              <dd className="text-neutral-900">{shippingValue}</dd>
            </div>
            <div className="flex items-center justify-between border-t border-neutral-200 pt-6 text-neutral-900">
              <dt>Total</dt>
              <dd className="text-base">{totalOrderValue}</dd>
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
              className="mt-6 w-full rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-primary-600"
              disabled={loading}
            >
              {loading ? 'Paying...' : 'Pay'} {totalOrderValue}
            </button>

            <p className="mt-6 flex justify-center text-sm font-medium text-neutral-500">
              <LockClosedIcon className="mr-1.5 h-5 w-5 text-neutral-400" aria-hidden="true" />
              Payment details stored in plain text
            </p>
            {errorMessage && (
              <p className="mt-3 text-center text-sm font-bold text-red-400">{errorMessage}</p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
};
