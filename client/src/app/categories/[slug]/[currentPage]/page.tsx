import { notFound } from 'next/navigation';
import { ProductsList } from '@/ui/molecules/products/ProductsList';
import { Pagination } from '@/ui/molecules/nav/Pagination';
import { getProducts } from '@/api/products';

interface Props {
	params: {
		slug: string;
		currentPage: string;
	};
}

export default async function CategoryPage({ params: { slug, currentPage } }: Props) {
	const products = await getProducts(20, 20 * (Number(currentPage) - 1), {
		categories: { some: { slug } },
	});

	if (!products?.data.length) {
		return notFound();
	}

	return (
		<main>
			<ProductsList products={products.data} />
			<Pagination
				hasNextPage={products.hasNextPage}
				hasPreviousPage={products.hasPreviousPage}
				currentPage={Number(currentPage)}
				totalPages={Math.ceil(products.totalCount / 20)}
        directory="categories"
        slug={slug}
			/>
		</main>
	);
}
