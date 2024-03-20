import { ReviewsListItem } from '@/ui/molecules/reviews/ReviewsListItem';
import { getReviews } from '@/api/review';
import type { ProductFragment } from '@/gql/graphql';

interface Props {
  productId: ProductFragment['id'];
}

export const ReviewsList = async ({ productId }: Props) => {
  const reviews = (await getReviews({ productId }, 5, { createdAt: 'Desc' })) ?? [];

  return (
    <ul className="mt-6 space-y-10 divide-y divide-neutral-200 border-b border-t border-neutral-200 pb-10">
      {reviews.map((review) => (
        <ReviewsListItem key={review.id} review={review} />
      ))}
    </ul>
  );
};
