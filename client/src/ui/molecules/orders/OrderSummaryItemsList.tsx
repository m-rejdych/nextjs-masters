import { OrderSummaryItemsListItem } from '@/ui/atoms/orders/OrderSummaryItemsListItem';
import type { OrderItemFragment } from '@/gql/graphql';

interface Props {
  items: OrderItemFragment[];
}

export const OrderSummaryItemsList = ({ items }: Props) => (
  <ul
    role="list"
    className="mt-6 divide-y divide-neutral-200 border-t border-neutral-200 text-sm font-medium text-neutral-500"
  >
    {items.map((item) => (
      <OrderSummaryItemsListItem key={item.id} {...item} />
    ))}
  </ul>
);
