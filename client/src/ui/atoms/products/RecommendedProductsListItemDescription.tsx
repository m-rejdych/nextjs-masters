import Link from 'next/link';
import { formatDolars } from '@/util/currency';
import type { ProductListItemFragment } from '@/gql/graphql';

interface Props {
	id: ProductListItemFragment['id'];
	name: ProductListItemFragment['name'];
	description: ProductListItemFragment['description'];
	price: ProductListItemFragment['price'];
}

export const RecommendedProductsListItemDescription = ({ id, name, description, price }: Props) => (
	<div className="mt-4 flex justify-between">
		<div>
			<h3 className="text-sm text-neutral-700">
				<Link href={`/product/${id}`}>
					<span aria-hidden="true" className="absolute inset-0" />
					{name}
				</Link>
			</h3>
			<p className="mt-1 text-sm text-neutral-500">{description}</p>
		</div>
		<p className="text-sm font-medium text-neutral-900">{formatDolars(price / 100)}</p>
	</div>
);
