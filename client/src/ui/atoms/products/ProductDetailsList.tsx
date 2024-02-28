import type { ProductFragment } from '@/gql/graphql';

interface Props {
	details: ProductFragment['details'];
}

export const ProductDetailsList = ({ details }: Props) => (
	<ul role="list">
		{details.map(({ id, description }) => (
			<li key={id}>{description}</li>
		))}
	</ul>
);
