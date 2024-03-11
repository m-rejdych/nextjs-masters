import { CartProductsListItemImage } from '@/ui/atoms/cart/CartProductsListItemImage';
import { CartProductsListItemHeading } from '@/ui/atoms/cart/CartProductsListItemHeading';
import { CartProductsListItemVariantInfo } from '@/ui/atoms/cart/CartProductsListItemVariantInfo';
import { CartProductsListItemQuantity } from '@/ui/atoms/cart/CartProductsListItemQuantity';
import { CartProductsListItemRemoveButton } from '@/ui/atoms/cart/CartProductsListItemRemoveButton';
import { CartProductsListItemStockInfo } from '@/ui/atoms/cart/CartProductsListItemStockInfo';
import { formatDolars } from '@/util/currency';
import type { OrderItemProductFragment, OrderItemFragment } from '@/gql/graphql';

interface Props {
	id: OrderItemFragment['id'];
	size: OrderItemFragment['size'];
	color: OrderItemFragment['color'];
  quantity: OrderItemFragment['quantity'];
	product: OrderItemProductFragment;
}

export const CartProductsListItem = ({ id, color, size, quantity, product }: Props) => {
	const image = product.images[0];

	return (
		<li className="flex py-6 sm:py-10">
			{image && <CartProductsListItemImage alt={image.alt} url={image.url} />}
			<div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
				<div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
					<div>
						<CartProductsListItemHeading slug={product.slug} name={product.name} />
						<CartProductsListItemVariantInfo color={color} size={size} />
						<p className="mt-1 text-sm font-medium text-neutral-900">
							{formatDolars(product.price / 100)}
						</p>
					</div>
					<div className="mt-4 sm:mt-0 sm:pr-9">
						<CartProductsListItemQuantity id={id} name={product.name} quantity={quantity} />
						<CartProductsListItemRemoveButton id={id} />
					</div>
				</div>
				<CartProductsListItemStockInfo
					selectedSize={size}
					selectedColor={color}
					productSizes={product.sizes}
					productColors={product.colors}
				/>
			</div>
		</li>
	);
};
