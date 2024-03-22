import { OrderHistoryListItemProductsListItem } from '@/ui/molecules/orders/OrderHistoryListItemProductsListItem';
import type { OrderListItemItemFragment } from '@/gql/graphql';

interface Props {
  items: OrderListItemItemFragment[];
}

export const OrderHistoryListItemProductsList = ({ items }: Props) => (
  <ul role="list" className="divide-y divide-neutral-200">
    {items.map((item) => (
      <OrderHistoryListItemProductsListItem key={item.id} {...item} />
    ))}
  </ul>
);
