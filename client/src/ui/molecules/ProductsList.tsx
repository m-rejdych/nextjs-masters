import type { Product as ProductType } from '@/types/products';
import { ProductListItem } from '@/ui/atoms/ProductListItem';

interface Props {
	products: ProductType[];
}

export const ProductsList = ({ products }: Props) => (
	<ul
    className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
    data-testid="products-list"
  >
		{products.map(({ id, ...rest }) => (
			<ProductListItem key={id} {...rest} />
		))}
	</ul>
);
