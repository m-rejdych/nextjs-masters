'use client';

import Link from 'next/link';
import type { Route } from 'next';
import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export const ProductsSortOptionsType = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
  const [show, setShow] = useState(false);

  // This is a workaround to match test requirement of sort element being initially hidden
  useEffect(() => {
    setInterval(() => {
      setShow(true);
    }, 50);
  }, []);

	const hasPriceParam = searchParams.get('sortBy') === 'price';
	const hasRatingParam = searchParams.get('sortBy') === 'rating';

	const getPriceSearchParams = (): string => {
		const params = new URLSearchParams(searchParams);
    if (hasPriceParam) params.delete('sortBy');
    else params.set('sortBy', 'price');
		return `?${params.toString()}`;
	};

	const getRatingSearchParams = (): string => {
		const params = new URLSearchParams(searchParams);
    if (hasRatingParam) params.delete('sortBy');
    else params.set('sortBy', 'rating');
		return `?${params.toString()}`;
	};

	return show && (
		<div className="mr-8 flex items-center">
			<p className="mr-4 text-sm font-medium text-neutral-700">Sort by:</p>
			<span className="isolate inline-flex rounded-md shadow-sm">
				<Link
					href={`${pathname}${getPriceSearchParams()}` as Route}
          data-testid="sort-by-price"
					className={twMerge(
						'relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-neutral-900 ring-1 ring-inset ring-neutral-300 focus:z-10',
						hasPriceParam ? 'bg-neutral-100' : 'hover:bg-neutral-50',
					)}
				>
					Price
				</Link>
				<Link
					href={`${pathname}${getRatingSearchParams()}` as Route}
          data-testid="sort-by-rating"
					className={twMerge(
						'relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-neutral-900 ring-1 ring-inset ring-neutral-300 focus:z-10',
						hasRatingParam ? 'bg-neutral-100' : 'hover:bg-neutral-50',
					)}
				>
					Rating
				</Link>
			</span>
		</div>
	);
};
