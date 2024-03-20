import { OrdersHistoryList } from '@/ui/molecules/orders/OrderHistoryList';

export const OrdersHistory = () => (
  <div className="mt-16">
    <h2 className="sr-only">Orders history</h2>
    <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
      <OrdersHistoryList />
    </div>
  </div>
);
