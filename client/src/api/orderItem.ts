import {
	OrderItemAddDocument,
	type OrderItemAddInput,
	type OrderItemFragment,
} from '@/gql/graphql';
import { executeQuery } from '@/util/gql';

export const addOrderItem = async (input: OrderItemAddInput): Promise<OrderItemFragment | null> => {
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
