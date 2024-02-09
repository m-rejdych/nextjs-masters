import type { Product as ProductType } from '@/types/products';
import { Product } from '@/ui/atoms/Product';

interface Props {
	products: ProductType[];
}

export const ProductsList = ({ products }: Props) => (
	<ul className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
		{products.map(({ id, ...rest }) => (
			<li key={id}>
				<Product {...rest} />
			</li>
		))}
	</ul>
);
