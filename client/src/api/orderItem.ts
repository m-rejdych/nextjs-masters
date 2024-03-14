import {
  OrderItemAddDocument,
  OrderItemIncrementDocument,
  OrderItemDecrementDocument,
  OrderItemRemoveDocument,
  type OrderItemAddInput,
  type OrderItemIdFragment,
} from '@/gql/graphql';
import { executeQuery } from '@/util/gql';

export const addOrderItem = async (
  input: OrderItemAddInput,
): Promise<OrderItemIdFragment | null> => {
  try {
    const { addOrderItem } = await executeQuery({
      query: OrderItemAddDocument,
      variables: { input },
    });
    return addOrderItem;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const incrementOrderItemQuantity = async (
  id: string,
): Promise<OrderItemIdFragment | null> => {
  try {
    const { incrementOrderItemQuantity } = await executeQuery({
      query: OrderItemIncrementDocument,
      variables: { id },
    });
    return incrementOrderItemQuantity;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const decrementOrderItemQuantity = async (id: string) => {
  try {
    const { decrementOrderItemQuantity } = await executeQuery({
      query: OrderItemDecrementDocument,
      variables: { id },
    });
    return decrementOrderItemQuantity;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const removeOrderItem = async (id: string): Promise<OrderItemIdFragment | null> => {
  try {
    const { removeOrderItem } = await executeQuery({
      query: OrderItemRemoveDocument,
      variables: { id },
    });
    return removeOrderItem;
  } catch (error) {
    console.log(error);
    return null;
  }
};
