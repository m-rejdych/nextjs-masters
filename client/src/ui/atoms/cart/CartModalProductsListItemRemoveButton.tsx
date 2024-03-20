'use client';

import { handleOrderItemRemoveAction } from '@/actions/orderItem';
import type { OrderItemFragment } from '@/gql/graphql';

interface Props {
  id: OrderItemFragment['id'];
}

export const CartModalProductsListItemRemoveButton = ({ id }: Props) => {
  const handleAction = async (): Promise<void> => {
    await handleOrderItemRemoveAction(id);
  };

  return (
    <form className="flex" action={handleAction}>
      <button type="submit" className="font-medium text-primary-600 hover:text-primary-500">
        Remove
      </button>
    </form>
  );
};
