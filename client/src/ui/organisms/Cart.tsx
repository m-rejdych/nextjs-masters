import { notFound } from 'next/navigation';
import { Summary } from '@/ui/molecules/cart/Summary';
import { CartProductsList } from '@/ui/molecules/cart/CartProductsList';
import { CartHeading } from '@/ui/atoms/cart/CartHeading';
import { getCookieOrder } from '@/util/order';

export const Cart = async () => {
	const order = await getCookieOrder();

	if (!order) {
		return notFound();
	}

	return (
		<div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
			<section aria-labelledby="cart-heading" className="lg:col-span-7">
				<CartHeading />
				<CartProductsList items={order.items} />
			</section>
			<Summary total={order.total} />
		</div>
	);
};
