import type { ProductListItemFragment } from '@/gql/graphql';
import { RecommendedProductsListItemImage } from '@/ui/atoms/products/RecommendedProductsListItemImage';
import { RecommendedProductsListItemDescription } from '@/ui/atoms/products/RecommendedProductsListItemDescription';

interface Props {
  slug: ProductListItemFragment['slug'];
  name: ProductListItemFragment['name'];
  description: ProductListItemFragment['description'];
  price: ProductListItemFragment['price'];
  images: ProductListItemFragment['images'];
}

export const RecommendedProductsListItem = ({ slug, name, description, price, images }: Props) => (
  <li className="group relative">
    {images[0] && <RecommendedProductsListItemImage image={images[0]} />}
    <RecommendedProductsListItemDescription
      slug={slug}
      name={name}
      description={description}
      price={price}
    />
  </li>
);
