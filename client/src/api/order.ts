import { OrderCreateDocument, OrderGetByIdDocument, type OrderFragment } from '@/gql/graphql';
import { executeQuery } from '@/util/gql';

export const getOrderById = async (id: string): Promise<OrderFragment | null> => {
	try {
		const { orderById } = await executeQuery(OrderGetByIdDocument, { id });
		return orderById ?? null;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const createOrder = async (): Promise<OrderFragment | null> => {
	try {
		const { createOrder } = await executeQuery(OrderCreateDocument);
		return createOrder;
	} catch (error) {
		console.log(error);
		return null;
	}
};
