import type { Route } from 'next';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';
import { ActiveLink } from '@/ui/atoms/nav/ActiveLink';

interface Props {
	currentPage: string | number;
}

export const Pagination = ({ currentPage }: Props) => {
	return (
		<nav
			className="my-4 flex items-center justify-between border-t border-neutral-200 px-4 sm:my-10 sm:px-0"
			aria-label="pagination"
		>
			<div className="-mt-px flex w-0 flex-1">
				<ActiveLink
					href={`/products/${Number(currentPage) - 1}` as Route}
					className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-neutral-500 hover:border-neutral-300 hover:text-neutral-700"
				>
					<ArrowLongLeftIcon className="mr-3 h-5 w-5 text-neutral-400" aria-hidden="true" />
					Previous
				</ActiveLink>
			</div>
			<div className="flex md:-mt-px">
				<span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-neutral-500">
					{currentPage}
				</span>
			</div>
			<div className="-mt-px flex w-0 flex-1 justify-end">
				<ActiveLink
					href={`/products/${Number(currentPage) + 1}` as Route}
					className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-neutral-500 hover:border-neutral-300 hover:text-neutral-700"
				>
					Next
					<ArrowLongRightIcon className="ml-3 h-5 w-5 text-neutral-400" aria-hidden="true" />
				</ActiveLink>
			</div>
		</nav>
	);
};
