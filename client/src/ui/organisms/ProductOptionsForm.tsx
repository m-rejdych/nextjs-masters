import { cookies } from 'next/headers';
import { AddToCartButton } from '../atoms/nav/AddToCartButton';
import { ColorPicker } from '@/ui/molecules/products/ColorPicker';
import { SizePicker } from '@/ui/molecules/products/SizePicker';
import { addOrderItem } from '@/api/orderItem';
import { createOrder } from '@/api/order';
import { getOrderByCookieOrderId } from '@/util/order';
import type { ProductFragment } from '@/gql/graphql';

interface Props {
	colors: ProductFragment['colors'];
	sizes: ProductFragment['sizes'];
	productId: string;
}

export const ProductOptionsForm = ({ colors, sizes, productId }: Props) => {
	const handleAction = async (formData: FormData) => {
		'use server';

		const sizeId = formData.get('sizeId');
		const colorId = formData.get('colorId');
		if (!colorId || !sizeId) return;

		let order = await getOrderByCookieOrderId();
		if (!order) {
			order = await createOrder();
			if (!order) return;

			cookies().set('orderId', order.id, {
				secure: process.env.NODE_ENV === 'production',
				httpOnly: true,
        sameSite: 'lax',
			});
		}

		await addOrderItem({
			productId,
			sizeId: sizeId as string,
			colorId: colorId as string,
			orderId: order.id,
		});
	};

	return (
		<form action={handleAction}>
			<ColorPicker colors={colors} />
			<SizePicker sizes={sizes} />
			<AddToCartButton />
		</form>
	);
};
