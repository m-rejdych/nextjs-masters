import { CartModalProductsListItemImage } from '@/ui/atoms/cart/CartModalProductsListItemImage';
import { CartModalProductsListItemInfo } from '@/ui/atoms/cart/CartModalProductsListItemInfo';
import { CartModalProductsListItemRemoveButton } from '@/ui/atoms/cart/CartModalProductsListItemRemoveButton';
import type { OrderItemFragment } from '@/gql/graphql';

export const CartModalProductsListItem = ({
  id,
  product,
  total,
  quantity,
  color,
  size,
}: OrderItemFragment) => (
  <li className="flex py-6">
    <CartModalProductsListItemImage image={product.images[0]} />
    <div className="ml-4 flex flex-1 flex-col">
      <CartModalProductsListItemInfo product={product} total={total} color={color} size={size} />
      <div className="flex flex-1 items-end justify-between text-sm">
        <p className="text-neutral-500">Quantity {quantity}</p>
        <CartModalProductsListItemRemoveButton id={id} />
      </div>
    </div>
  </li>
);
