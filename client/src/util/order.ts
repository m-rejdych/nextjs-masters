import { cookies } from 'next/headers';
import type { OrderItemsCountFragment, OrderFragment } from '@/gql/graphql';
import { getOrderItemsCountById, getOrderById } from '@/api/order';

export const getCookieOrderItemsCount = async (): Promise<OrderItemsCountFragment | null> => {
  const orderId = cookies().get('orderId')?.value;
  if (!orderId) return null;

  const order = await getOrderItemsCountById(orderId);

  return order;
};

export const getCookieOrder = async (): Promise<OrderFragment | null> => {
  const orderId = cookies().get('orderId')?.value;
  if (!orderId) return null;

  const order = await getOrderById(orderId);
  return order;
};
