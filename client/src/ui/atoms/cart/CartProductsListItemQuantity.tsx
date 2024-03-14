'use client';

import { useOptimistic } from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/20/solid';
import {
  handleOrderItemIncrementAction,
  handleOrderItemDecrementAction,
} from '@/actions/orderItem';
import type { OrderItemFragment, OrderItemProductFragment } from '@/gql/graphql';

interface Props {
  id: OrderItemFragment['id'];
  quantity: OrderItemFragment['quantity'];
  name: OrderItemProductFragment['name'];
}

export const CartProductsListItemQuantity = ({ id, name, quantity }: Props) => {
  const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);

  const handleIncrement = async (): Promise<void> => {
    setOptimisticQuantity((prev) => prev + 1);
    await handleOrderItemIncrementAction(id);
  };

  const handleDecrement = async (): Promise<void> => {
    setOptimisticQuantity((prev) => prev - 1);
    await handleOrderItemDecrementAction(id);
  };

  return (
    <form className="flex items-center">
      <p className="sr-only">Quantity, {name}</p>
      <p className="text-sm text-neutral-900" data-testid="quantity">
        {optimisticQuantity}
      </p>
      <div className="ml-2 flex flex-col">
        <button
          className="m-0.5 h-5 w-5 p-0.5"
          type="submit"
          formAction={handleIncrement}
          data-testid="increment"
        >
          <ArrowUpIcon className="text-neutral-400" />
        </button>
        <button
          className="m-0.5 h-5 w-5 p-0.5"
          type="submit"
          formAction={handleDecrement}
          data-testid="decrement"
        >
          <ArrowDownIcon className="text-neutral-400" />
        </button>
      </div>
    </form>
  );
};
