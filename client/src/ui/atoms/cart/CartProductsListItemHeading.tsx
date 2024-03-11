import Link from 'next/link';
import type { OrderItemProductFragment } from '@/gql/graphql';

interface Props {
	slug: OrderItemProductFragment['slug'];
	name: OrderItemProductFragment['name'];
}

export const CartProductsListItemHeading = ({ slug, name }: Props) => (
	<div className="flex justify-between">
		<h3 className="text-sm">
			<Link href={`/product/${slug}`} className="font-medium text-neutral-700 hover:text-neutral-800">
				{name}
			</Link>
		</h3>
	</div>
);
