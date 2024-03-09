import { CheckIcon, ClockIcon } from '@heroicons/react/20/solid';
import type { OrderItemProductFragment, OrderItemFragment } from '@/gql/graphql';

interface Props {
	selectedSize: OrderItemFragment['size'];
	selectedColor: OrderItemFragment['color'];
	productSizes: OrderItemProductFragment['sizes'];
	productColors: OrderItemProductFragment['colors'];
}

export const CartProductsListItemStockInfo = ({
	selectedColor,
	selectedSize,
	productSizes,
	productColors,
}: Props) => {
	const sizeInStock = productSizes.some(
		({ inStock, size }) => size.id === selectedSize.id && inStock,
	);
	const colorInStock = productColors.some(
		({ inStock, color }) => color.id === selectedColor.id && inStock,
	);
	const inStock = sizeInStock && colorInStock;

	return (
		<p className="mt-4 flex space-x-2 text-sm text-neutral-700">
			{inStock ? (
				<CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
			) : (
				<ClockIcon className="h-5 w-5 flex-shrink-0 text-neutral-300" aria-hidden="true" />
			)}
			<span>{inStock ? 'In stock' : 'Out of stock'}</span>
		</p>
	);
};
