import { notFound } from 'next/navigation';
import { ProductsList } from '@/ui/molecules/products/ProductsList';
import { Pagination } from '@/ui/molecules/nav/Pagination';
import { ProductsHero } from '@/ui/organisms/ProductsHero';
import { getProducts } from '@/api/products';
import { getOrderBy, type SortOrderParam, type SortTypeParam } from '@/util/products';

interface SearchParams {
	sortBy?: SortTypeParam;
	sortOrder?: SortOrderParam;
}

interface Props {
	searchParams: SearchParams;
}

export default async function Home({ searchParams: { sortOrder, sortBy } }: Props) {
	const products = await getProducts({ take: 20, orderBy: getOrderBy(sortBy, sortOrder) });

	if (!products) {
		return notFound();
	}

	return (
		<main>
			<ProductsHero title="All you need" />
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
