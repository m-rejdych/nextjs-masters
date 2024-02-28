import { notFound } from 'next/navigation';
import { ProductsList } from '@/ui/molecules/products/ProductsList';
import { Pagination } from '@/ui/molecules/nav/Pagination';
import { ProductGetListDocument } from '@/gql/graphql';
import { getProducts } from '@/api/products';
import { executeQuery } from '@/util/gql';

interface Params {
	currentPage: string;
}

interface Props {
	params: Params;
}

export const generateStaticParams = async () => {
	const {
		products: { totalCount },
	} = await executeQuery(ProductGetListDocument, {});

	return Array.from({ length: Math.ceil(totalCount / 20) }, (_, index) => ({
		currentPage: (index + 1).toString(),
	}));
};

export default async function ProductsPaginated({ params: { currentPage } }: Props) {
	const products = await getProducts(20, (Number(currentPage) - 1) * 20);

	if (!products?.data.length) {
		return notFound();
	}

	return (
		<main>
			<ProductsList products={products.data} />
			<Pagination
				currentPage={currentPage}
				hasPreviousPage={products.hasPreviousPage}
				hasNextPage={products.hasNextPage}
			/>
		</main>
	);
}
