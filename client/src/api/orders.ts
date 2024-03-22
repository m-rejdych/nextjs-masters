import {
  OrderCreateDocument,
  OrderGetByIdDocument,
  OrderGetItemsCountByIdDocument,
  OrderGetListDocument,
  type OrderListItemFragment,
  type OrderItemsCountFragment,
  type OrderFragment,
  type OrderWhere,
  type OrderOrderBy,
} from '@/gql/graphql';
import { executeQuery } from '@/util/gql';

export const getOrderItemsCountById = async (
  id: string,
): Promise<OrderItemsCountFragment | null> => {
  try {
    const { order } = await executeQuery({
      query: OrderGetItemsCountByIdDocument,
      variables: { id },
      next: { tags: ['cart'] },
      cache: 'no-store',
    });
    return order ?? null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const createOrder = async (userId?: string): Promise<OrderItemsCountFragment | null> => {
  try {
    const { createOrder } = await executeQuery({
      query: OrderCreateDocument,
      variables: { userId },
    });
    return createOrder;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getOrderById = async (id: string): Promise<OrderFragment | null> => {
  try {
    const { order } = await executeQuery({
      query: OrderGetByIdDocument,
      variables: { id },
      next: { tags: ['cart', 'order'] },
      cache: 'no-store',
    });
    return order ?? null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getOrders = async (
  where?: OrderWhere,
  orderBy?: OrderOrderBy,
): Promise<OrderListItemFragment[]> => {
  try {
    const { orders } = await executeQuery({
      query: OrderGetListDocument,
      variables: { where, orderBy },
      next: { tags: ['orders'] },
    });
    return orders;
  } catch (error) {
    console.log(error);
    return [];
  }
};
