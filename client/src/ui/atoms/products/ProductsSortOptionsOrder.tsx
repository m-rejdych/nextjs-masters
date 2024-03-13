'use client';

import Link from 'next/link';
import type { Route } from 'next';
import { usePathname, useSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export const ProductsSortOptionsOrder = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const hasDescParam = searchParams.get('sortOrder') === 'desc';
	const hasAscParam = searchParams.get('sortOrder') === 'asc';

	const getDescSearchParams = (): string => {
		const params = new URLSearchParams(searchParams);
    if (hasDescParam) params.delete('sortOrder');
    else params.set('sortOrder', 'desc');
		return `?${params.toString()}`;
	};

	const getAscSearchParams = (): string => {
		const params = new URLSearchParams(searchParams);
    if (hasAscParam) params.delete('sortOrder');
    else params.set('sortOrder', 'asc');
		return `?${params.toString()}`;
	};


	return (
		<div className="flex items-center">
			<p className="mr-4 text-sm font-medium text-neutral-700">Sort order:</p>
			<span className="isolate inline-flex rounded-md shadow-sm">
				<Link
					href={`${pathname}${getDescSearchParams()}` as Route}
					className={twMerge(
						'relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-neutral-900 ring-1 ring-inset ring-neutral-300 focus:z-10',
						hasDescParam ? 'bg-neutral-100' : 'hover:bg-neutral-50',
					)}
				>
					Desc
				</Link>
				<Link
					href={`${pathname}${getAscSearchParams()}` as Route}
					className={twMerge(
						'relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-neutral-900 ring-1 ring-inset ring-neutral-300 focus:z-10',
						hasAscParam ? 'bg-neutral-100' : 'hover:bg-neutral-50 ',
					)}
				>
					Asc
				</Link>
			</span>
		</div>
	);
};
