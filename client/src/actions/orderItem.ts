'use server';

import { revalidateTag } from 'next/cache';
import { incrementOrderItemQuantity, decrementOrderItemQuantity } from "@/api/orderItem";

export const handleOrderItemIncrementAction = async (id: string): Promise<void> => {
  await incrementOrderItemQuantity(id);
  revalidateTag('cart');
};

export const handleOrderItemDecrementAction = async (id: string): Promise<void> => {
  await decrementOrderItemQuantity(id);
  revalidateTag('cart');
};
