'use client';

import { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { twMerge } from 'tailwind-merge';

export const ReviewFormRatingInput = () => {
	const [rating, setRating] = useState(0);
	const [hoverRating, setHoverRating] = useState(0);

	return (
		<div className="sm:col-span-4">
			<label htmlFor="rating" className="block text-sm font-medium leading-6 text-neutral-900">
				Rating
			</label>
			<div className="flex items-center mt-2">
				{[1, 2, 3, 4, 5].map((possibleRating) => (
					<button
						key={possibleRating}
						type="button"
						onMouseEnter={() => setHoverRating(possibleRating)}
						onMouseLeave={() => setHoverRating(0)}
						onClick={() => setRating(possibleRating)}
					>
						<StarIcon
							className={twMerge(
								(hoverRating || rating) >= possibleRating ? 'text-yellow-400' : 'text-neutral-200',
								'h-5 w-5 flex-shrink-0',
							)}
							aria-hidden="true"
						/>
					</button>
				))}
			</div>
			<input hidden readOnly name="rating" id="rating" type="number" value={rating} />
		</div>
	);
};
