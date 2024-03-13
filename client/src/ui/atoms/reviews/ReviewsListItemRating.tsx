import { StarIcon } from '@heroicons/react/20/solid';
import { twMerge } from 'tailwind-merge';
import type { ReviewListItemFragment } from '@/gql/graphql';

interface Props {
  rating: ReviewListItemFragment['rating'];
}

export const ReviewsListItemRating = ({ rating }: Props) => (
  <div className="flex items-center xl:col-span-1">
    <div className="flex items-center">
      {[0, 1, 2, 3, 4].map((possibleRating) => (
        <StarIcon
          key={possibleRating}
          className={twMerge(
            rating > possibleRating ? 'text-yellow-400' : 'text-neutral-200',
            'h-5 w-5 flex-shrink-0',
          )}
          aria-hidden="true"
        />
      ))}
    </div>
    <p className="ml-3 text-sm text-neutral-700">
      {rating}
      <span className="sr-only"> out of 5 stars</span>
    </p>
  </div>
);
