import { twMerge } from 'tailwind-merge';
import { StarIcon } from '@heroicons/react/20/solid';
import type { ProductListItemFragment } from '@/gql/graphql';

interface Props {
  rating: ProductListItemFragment['rating'];
  reviewCount: ProductListItemFragment['reviewCount'];
}

export const ProductListItemRating = ({ reviewCount, rating }: Props) => (
  <div>
    <p className="sr-only" data-testid="product-rating">
      {rating}
    </p>
    <div className="-ml-1 flex items-center">
      {[0, 1, 2, 3, 4].map((currentRating) => (
        <StarIcon
          key={currentRating}
          className={twMerge(
            rating > currentRating ? 'text-yellow-400' : 'text-neutral-200',
            'h-5 w-5 flex-shrink-0',
          )}
          aria-hidden="true"
        />
      ))}
    </div>
    <p className="text-sm text-neutral-dark">{reviewCount} reviews</p>
  </div>
);
