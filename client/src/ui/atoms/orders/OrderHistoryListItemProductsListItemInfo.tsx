import { formatDolars } from '@/util/currency';
import type { OrderListItemItemFragment, OrderListItemItemProductFragment } from '@/gql/graphql';

interface Props {
  total: OrderListItemItemFragment['total'];
  quantity: OrderListItemItemFragment['quantity'];
  size: OrderListItemItemFragment['size'];
  color: OrderListItemItemFragment['color'];
  product: {
    description: OrderListItemItemProductFragment['description'];
    name: OrderListItemItemProductFragment['name'];
  };
}

export const OrderHistoryListItemProductsListItemInfo = ({
  total,
  quantity,
  size,
  color,
  product,
}: Props) => (
  <div className="ml-6 flex-1 text-sm">
    <div className="font-medium text-neutral-900 sm:flex sm:justify-between">
      <h5>{product.name}</h5>
      <p className="mt-0.5 sm:mt-0">{formatDolars(total / 100)}</p>
    </div>
    <p className="hidden text-neutral-500 sm:mt-2 sm:block">{product.description}</p>
    <p className="text-neutral-500 mt-1 sm:mt-4">Quantity: {quantity}</p>
    <p className="text-neutral-500">{color.name}</p>
    <p className="text-neutral-500">{size.type}</p>
  </div>
);
