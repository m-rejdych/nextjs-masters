import { cookies } from 'next/headers';
import type { OrderFragment } from '@/gql/graphql';
import { getOrderById } from '@/api/order';

export const getOrderByCookieOrderId = async (): Promise<OrderFragment | null> => {
	const orderId = cookies().get('orderId')?.value;
	if (!orderId) return null;

	const order = await getOrderById(orderId);
	return order;
};
