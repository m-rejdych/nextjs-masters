import { notFound } from 'next/navigation';
import { ProductsList } from '@/ui/molecules/products/ProductsList';
import { Pagination } from '@/ui/molecules/nav/Pagination';
import { getProducts } from '@/api/products';

interface Params {
	currentPage: string;
}

interface Props {
	params: Params;
}

export const generateStaticParams = async () => {
	let hasMore = true;
	let currentPage = 1;
	const maxPagesCount = 20;
	const params: Params[] = [];

	while (hasMore && currentPage <= maxPagesCount) {
		const products = await getProducts(20, (currentPage - 1) * 20);
		if (!products) {
			hasMore = false;
		} else {
			params.push({ currentPage: currentPage.toString() });
			if (products.length < 20) {
				hasMore = false;
			} else {
				currentPage++;
			}
		}
	}

	return params;
};

export default async function ProductsPaginated({ params: { currentPage } }: Props) {
	const products = await getProducts(20, (Number(currentPage) - 1) * 20);

	if (!products) {
		return notFound();
	}

	return (
		<main>
			<ProductsList products={products} />
			<Pagination currentPage={currentPage} />
		</main>
	);
}
