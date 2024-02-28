import { formatDolars } from '@/util/currency';
import type { ProductFragment } from '@/gql/graphql';

interface Props {
	name: ProductFragment['name'];
	price: ProductFragment['price'];
}

export const ProductHeading = ({ name, price }: Props) => (
	<div className="flex justify-between">
		<h1 className="text-xl font-medium text-gray-900">{name}</h1>
		<p className="text-xl font-medium text-gray-900">{formatDolars(price / 100)}</p>
	</div>
);
