import { ProductsList } from '@/ui/molecules/products/ProductsList';
import { PRODUCTS } from '@/constants/products';

export default function Products() {
	return (
		<main>
			<ProductsList products={PRODUCTS} />;
		</main>
	);
}
