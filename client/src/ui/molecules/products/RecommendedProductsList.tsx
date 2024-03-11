import type { ProductListItemFragment } from '@/gql/graphql';
import { RecommendedProductsListItem } from '@/ui/atoms/products/RecommendedProductsListItem';

interface Props {
	products: ProductListItemFragment[];
}

export const RecommendedProductsList = ({ products }: Props) => (
	<ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
		{products.map(({ id, slug, name, description, price, images }) => (
			<RecommendedProductsListItem
				key={id}
        slug={slug}
				name={name}
				description={description}
				price={price}
        images={images}
			/>
		))}
	</ul>
);
