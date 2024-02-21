import { notFound } from 'next/navigation';
import { ProductsList } from '@/ui/molecules/products/ProductsList';
import { Pagination } from '@/ui/molecules/nav/Pagination';
import { getProducts } from '@/api/products';

interface Props {
	params: {
		currentPage: string;
	};
}

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
