import { notFound } from 'next/navigation';
import { ProductsList } from '@/ui/molecules/products/ProductsList';
import { Pagination } from '@/ui/molecules/nav/Pagination';
import { getProducts } from '@/api/products';

export default async function Home() {
	const products = await getProducts(20);

	if (!products) {
		return notFound();
	}

	return (
		<main>
			<h2 className="sr-only">Products</h2>
			<ProductsList products={products.data} />
			<Pagination
				currentPage={1}
				hasPreviousPage={products.hasPreviousPage}
				hasNextPage={products.hasNextPage}
        totalPages={Math.floor(products.totalCount / 20)}
        directory="products"
			/>
		</main>
	);
}
