import { notFound } from 'next/navigation';
import { ProductsList } from '@/ui/molecules/products/ProductsList';
import { Pagination } from '@/ui/molecules/nav/Pagination';
import { getProducts } from '@/api/products';

export default async function Products() {
	const products = await getProducts(20);

	if (!products) {
		return notFound();
	}

	return (
		<main>
			<ProductsList products={products} />
			<Pagination currentPage={1} />
		</main>
	);
}
