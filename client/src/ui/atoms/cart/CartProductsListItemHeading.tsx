import Link from 'next/link';
import type { OrderItemProductFragment } from '@/gql/graphql';

interface Props {
	id: OrderItemProductFragment['id'];
	name: OrderItemProductFragment['name'];
}

export const CartProductsListItemHeading = ({ id, name }: Props) => (
	<div className="flex justify-between">
		<h3 className="text-sm">
			<Link href={`/product/${id}`} className="font-medium text-neutral-700 hover:text-neutral-800">
				{name}
			</Link>
		</h3>
	</div>
);
