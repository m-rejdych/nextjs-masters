import type { ExtendedProduct } from '@/types/products';
interface Props {
	details: ExtendedProduct['details'];
}

export const ProductDetailsList = ({ details }: Props) => (
	<ul role="list">
		{details.map((item) => (
			<li key={item}>{item}</li>
		))}
	</ul>
);
