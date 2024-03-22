import { OrdersHistory } from '@/ui/organisms/OrdersHistory';

export const metadata = {
  title: 'Orders',
  description: 'Check the status of recent orders, manage returns, and discover similar products.',
};

export const dynamic = 'force-dynamic'

export default function OrdersPage() {
  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
            <h1 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              Order history
            </h1>
            <p className="mt-2 text-sm text-neutral-500">
              Check the status of recent orders, manage returns, and discover similar products.
            </p>
          </div>
        </div>
        <OrdersHistory />
      </div>
    </div>
  );
}
