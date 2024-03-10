import {
	OrderCreateDocument,
	OrderGetByIdDocument,
	OrderGetItemsCountByIdDocument,
	type OrderItemsCountFragment,
	type OrderFragment,
} from '@/gql/graphql';
import { executeQuery } from '@/util/gql';

export const getOrderItemsCountById = async (
	id: string,
): Promise<OrderItemsCountFragment | null> => {
	try {
		const { orderById } = await executeQuery({
			query: OrderGetItemsCountByIdDocument,
			variables: { id },
			next: { tags: ['cart'] },
      cache: 'no-store',
		});
		return orderById ?? null;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const createOrder = async (): Promise<OrderItemsCountFragment | null> => {
	try {
		const { createOrder } = await executeQuery({ query: OrderCreateDocument });
		return createOrder;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const getOrderById = async (id: string): Promise<OrderFragment | null> => {
	try {
		const { orderById } = await executeQuery({
			query: OrderGetByIdDocument,
			variables: { id },
			next: { tags: ['cart'] },
      cache: 'no-store',
		});
		return orderById ?? null;
	} catch (error) {
		console.log(error);
		return null;
	}
};
