import { notFound } from 'next/navigation';
import { ProductsList } from '@/ui/molecules/products/ProductsList';
import { Pagination } from '@/ui/molecules/nav/Pagination';
import { ProductsHero } from '@/ui/organisms/ProductsHero';
// import { ProductGetListDocument } from '@/gql/graphql';
import { getProducts } from '@/api/products';
import { getOrderBy, type SortOrderParam, type SortTypeParam } from '@/util/products';
// import { executeQuery } from '@/util/gql';

interface Params {
	currentPage: string;
}

interface SearchParams {
	sortBy?: SortTypeParam;
	sortOrder?: SortOrderParam;
}

interface Props {
	params: Params;
	searchParams: SearchParams;
}

// export const generateStaticParams = async () => {
// 	const {
// 		products: { totalCount },
// 	} = await executeQuery({ query: ProductGetListDocument, variables: {} });
//
// 	return Array.from({ length: Math.ceil(totalCount / 20) }, (_, index) => ({
// 		currentPage: (index + 1).toString(),
// 	}));
// };

export default async function ProductsPaginated({
	params: { currentPage },
	searchParams: { sortBy, sortOrder },
}: Props) {
	const products = await getProducts({
		take: 20,
		offset: (Number(currentPage) - 1) * 20,
		orderBy: getOrderBy(sortBy, sortOrder),
	});

	if (!products?.data.length) {
		return notFound();
	}

	return (
		<main>
			<ProductsHero title="All you need" />
			<ProductsList products={products.data} />
			<Pagination
				currentPage={Number(currentPage)}
				hasPreviousPage={products.hasPreviousPage}
				hasNextPage={products.hasNextPage}
				totalPages={Math.ceil(products.totalCount / 20)}
				directory="products"
			/>
		</main>
	);
}
