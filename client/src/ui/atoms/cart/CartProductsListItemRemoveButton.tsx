import { revalidateTag } from 'next/cache';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { removeOrderItem } from '@/api/orderItem';
import type { OrderItemFragment } from '@/gql/graphql';

interface Props {
  id: OrderItemFragment['id'];
}
 
export const CartProductsListItemRemoveButton = ({ id }: Props) => {
  const handleAction = async (): Promise<void> => {
    'use server';

    await removeOrderItem(id);
    revalidateTag('cart');
  }

  return (
    <form className="absolute right-0 top-0" action={handleAction}>
      <button type="submit" className="-m-2 inline-flex p-2 text-neutral-400 hover:text-neutral-500">
        <span className="sr-only">Remove</span>
        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </form>
  );
};
