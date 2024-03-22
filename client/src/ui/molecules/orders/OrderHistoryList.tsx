import { auth } from '@clerk/nextjs';
import { OrdersHistoryListItem } from '@/ui/molecules/orders/OrdersHistoryListItem';
import { getOrders } from '@/api/orders';

export const OrdersHistoryList = async () => {
  const { userId } = auth();
  const orders = userId ? await getOrders({ userId, NOT: { status: 'CREATED' } }) : [];

  return (
    userId &&
    (orders.length ? (
      <ul className="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
        {orders.map((order) => (
          <OrdersHistoryListItem key={order.id} {...order} />
        ))}
      </ul>
    ) : (
      <div className="flex min-h-96 flex-col items-center justify-center">
        <h3 className="text-center text-xl font-semibold text-neutral-900">No orders found</h3>
        <p className="text-center text-sm text-neutral-500">
          You haven&apos;t placed any orders yet.
        </p>
      </div>
    ))
  );
};
