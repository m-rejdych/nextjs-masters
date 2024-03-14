import { CartProductsListItem } from './CartProductsListItem';
import type { OrderItemFragment } from '@/gql/graphql';

interface Props {
  items: OrderItemFragment[];
}

export const CartProductsList = ({ items }: Props) => (
  <ul role="list" className="divide-y divide-neutral-200 border-b border-t border-neutral-200">
    {items.map(({ quantity, product, color, size, id }) => (
      <CartProductsListItem
        key={id}
        id={id}
        product={product}
        size={size}
        color={color}
        quantity={quantity}
      />
    ))}
  </ul>
);
