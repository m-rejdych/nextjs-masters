import { RecommendedProductsList } from '@/ui/molecules/products/RecommendedProductsList';
import { getProducts } from '@/api/products';

interface Props {
	productId: string;
	categoryId: string;
	collectionId: string;
}

export const RecommendedProducts = async ({ productId, categoryId, collectionId }: Props) => {
	const products = await getProducts({
		take: 4,
		where: {
			categories: { some: { id: categoryId } },
			collections: { some: { id: collectionId } },
			NOT: { id: productId },
		},
	});

	if (!products?.data.length) return null;

	return (
		<div className="bg-white" data-testid="related-products">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="text-2xl font-bold tracking-tight text-gray-900">
					Customers also purchased
				</h2>
				<RecommendedProductsList products={products.data} />
			</div>
		</div>
	);
};
