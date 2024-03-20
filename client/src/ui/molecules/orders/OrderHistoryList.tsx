import { auth } from '@clerk/nextjs';
import { OrdersHistoryListItem } from '@/ui/molecules/orders/OrdersHistoryListItem';
import { getOrders } from '@/api/order';

export const OrdersHistoryList = async () => {
  const { userId } = auth();
  const orders = userId ? await getOrders({ userId, NOT: { status: 'CREATED' } }) : [];

  return (
    userId && (
      <ul className="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
        {orders.map((order) => (
          <OrdersHistoryListItem key={order.id} {...order} />
        ))}
      </ul>
    )
  );
};
