import { CartProductsListItemRemoveButton } from '@/ui/atoms/cart/CartProductsListItemRemoveButton';
import type { OrderItemFragment } from '@/gql/graphql';

interface Props {
  id: OrderItemFragment['id'];
}

export const CartProductsListItemRemoveForm = ({ id }: Props) => (
  <form className="absolute right-0 top-0">
    <CartProductsListItemRemoveButton id={id} />
  </form>
);
