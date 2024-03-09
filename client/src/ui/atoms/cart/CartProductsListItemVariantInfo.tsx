import type { OrderItemFragment } from '@/gql/graphql';

interface Props {
	size: OrderItemFragment['size'];
	color: OrderItemFragment['color'];
}

export const CartProductsListItemVariantInfo = ({ size, color }: Props) => (
	<div className="mt-1 flex text-sm">
		<p className="text-neutral-500">{color.name}</p>
		<p className="ml-4 border-l border-neutral-200 pl-4 text-neutral-500">{size.type}</p>
	</div>
);
