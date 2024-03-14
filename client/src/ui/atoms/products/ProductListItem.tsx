import { ProductListItemImage } from '@/ui/atoms/products/ProductListItemImage';
import { ProductListItemHeading } from '@/ui/atoms/products/ProductListItemHeading';
import { ProductListItemRating } from '@/ui/atoms/products/ProductListItemRating';
import { formatDolars } from '@/util/currency';
import type { ProductListItemFragment } from '@/gql/graphql';

export const ProductListItem = ({
  slug,
  name,
  description,
  price,
  images,
  rating,
  reviewCount,
}: ProductListItemFragment) => {
  const image = images[0];

  return (
    <li className="group relative flex cursor-pointer flex-col overflow-hidden rounded-lg border border-neutral-light bg-white">
      {image && <ProductListItemImage url={image.url} alt={image.alt} />}
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <ProductListItemHeading name={name} slug={slug} />
        <ProductListItemRating rating={rating} reviewCount={reviewCount} />
        <p className="text-sm text-neutral-main">{description}</p>
        <div className="flex flex-1 flex-col justify-end">
          <p data-testid="product-price" className="text-base font-medium text-neutral-dark">
            {formatDolars(price / 100)}
          </p>
        </div>
      </div>
    </li>
  );
};
