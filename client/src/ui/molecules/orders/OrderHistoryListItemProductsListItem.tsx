import { OrderHistoryListItemProductsListItemImage } from '@/ui/atoms/orders/OrderHistoryListItemProductsListItemImage';
import { OrderHistoryListItemProductsListItemInfo } from '@/ui/atoms/orders/OrderHistoryListItemProductsListItemInfo';
import { OrderHistoryListItemProductsListItemOptions } from '@/ui/atoms/orders/OrderHistoryListItemProductsListItemOptions';
import type { OrderListItemItemFragment } from '@/gql/graphql';

export const OrderHistoryListItemProductsListItem = ({
  total,
  product,
  quantity,
  size,
  color,
}: OrderListItemItemFragment) => (
  <li className="p-4 sm:p-6">
    <div className="flex items-center sm:items-start">
      <OrderHistoryListItemProductsListItemImage images={product.images} />
      <OrderHistoryListItemProductsListItemInfo
        size={size}
        color={color}
        quantity={quantity}
        total={total}
        product={product}
      />
    </div>
    <div className="mt-6 sm:flex sm:justify-end">
      <OrderHistoryListItemProductsListItemOptions slug={product.slug} />
    </div>
  </li>
);
