import type { ExtendedProduct } from '@/types/products';
interface Props {
	details: ExtendedProduct['details'];
}

export const ProductDetailsList = ({ details }: Props) => (
	<ul role="list">
		{details.map(({ id, description }) => (
			<li key={id}>{description}</li>
		))}
	</ul>
);
