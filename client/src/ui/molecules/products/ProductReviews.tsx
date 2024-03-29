import Link from 'next/link';
import { ProductRating } from '@/ui/atoms/products/ProductRating';
import type { ProductFragment } from '@/gql/graphql';

interface Props {
  slug: ProductFragment['slug'];
  rating: ProductFragment['rating'];
  reviewCount: ProductFragment['reviewCount'];
}

export const ProductReviews = ({ slug, rating, reviewCount }: Props) => (
  <div className="mt-4">
    <h2 className="sr-only">Reviews</h2>
    <div className="flex items-center">
      <ProductRating rating={rating} />
      <div aria-hidden="true" className="ml-4 text-sm text-neutral-300">
        ·
      </div>
      <div className="ml-4 flex">
        <Link href={`/product/${slug}/reviews`} className="text-sm font-medium text-primary-600 hover:text-primary-500">
          See all {reviewCount} reviews
        </Link>
      </div>
    </div>
  </div>
);
