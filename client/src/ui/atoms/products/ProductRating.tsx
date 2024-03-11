import { StarIcon } from '@heroicons/react/20/solid';
import { twMerge } from 'tailwind-merge';
import type { ProductFragment } from '@/gql/graphql';

interface Props {
	rating: ProductFragment['rating'];
}

export const ProductRating = ({ rating: originalRating }: Props) => {
	const rating = originalRating ? Math.round(originalRating) : 0;

	return (
		<>
			<p className="text-sm text-gray-700">
				{rating}
				<span className="sr-only"> out of 5 stars</span>
			</p>
			<div className="ml-1 flex items-center">
				{[0, 1, 2, 3, 4].map((ratingItem) => (
					<StarIcon
						key={ratingItem}
						className={twMerge(
							rating > ratingItem ? 'text-yellow-400' : 'text-gray-200',
							'h-5 w-5 flex-shrink-0',
						)}
						aria-hidden="true"
					/>
				))}
			</div>
		</>
	);
};
