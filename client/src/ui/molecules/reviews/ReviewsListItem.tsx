import { ReviewsListItemRating } from '@/ui/atoms/reviews/ReviewsListItemRating';
import { ReviewsListItemDescription } from '@/ui/atoms/reviews/ReviewsListItemDescription';
import { ReviewsListItemMeta } from '@/ui/atoms/reviews/ReviewsListItemMeta';
import type { ReviewListItemFragment } from '@/gql/graphql';

interface Props {
	review: ReviewListItemFragment;
}

export const ReviewsListItem = ({ review }: Props) => (
	<li className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
		<div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
			<ReviewsListItemRating rating={review.rating} />
			<ReviewsListItemDescription title={review.title} description={review.description} />
		</div>
		<ReviewsListItemMeta author={review.author} createdAt={review.createdAt} />
	</li>
);
