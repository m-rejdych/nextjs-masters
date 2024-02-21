import { StarIcon } from '@heroicons/react/20/solid';
import { twMerge } from 'tailwind-merge';

import type { ExtendedProduct } from '@/types/products';

interface Props {
	rating: ExtendedProduct['rating'];
}

export const ProductRating = ({ rating }: Props) => (
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
