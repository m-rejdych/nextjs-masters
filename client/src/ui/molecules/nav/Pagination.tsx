import type { Route } from 'next';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';
import { ActiveLink } from '@/ui/atoms/nav/ActiveLink';

interface Props {
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  totalPages: number;
  directory: 'products' | 'categories' | 'collections';
  slug?: string;
}

export const Pagination = ({
  currentPage,
  hasNextPage,
  hasPreviousPage,
  totalPages,
  directory,
  slug,
}: Props) => {
  const firstPagesNumbers = Array.from(
    { length: totalPages <= 6 ? totalPages : 3 },
    (_, i) => i + 1,
  );
  const lastPagesNumbers =
    totalPages <= 6 ? [] : Array.from({ length: 3 }, (_, i) => totalPages - i).toReversed();

  const getLink = (num: number | string) =>
    `/${directory}${slug ? `/${slug}` : ''}/${num}` as Route;

  return (
    <nav
      aria-label="pagination"
      className="my-4 flex items-center justify-between border-t border-neutral-200 px-4 sm:my-10 sm:px-0"
    >
      <div className="-mt-px flex w-0 flex-1">
        {hasPreviousPage && (
          <ActiveLink
            href={getLink(currentPage - 1)}
            className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-neutral-500 hover:border-neutral-300 hover:text-neutral-700"
          >
            <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-neutral-400" aria-hidden="true" />
            Previous
          </ActiveLink>
        )}
      </div>
      <div className="hidden md:-mt-px md:flex">
        {firstPagesNumbers.map((num) => (
          <ActiveLink
            key={num}
            exact
            href={getLink(num)}
            className="inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium"
            inactiveClassName="border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300"
            activeClassName="border-primary-500 text-primary-600"
          >
            {num}
          </ActiveLink>
        ))}
        {lastPagesNumbers.length ? (
          <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-neutral-500">
            ...
          </span>
        ) : null}
        {lastPagesNumbers.map((num) => (
          <ActiveLink
            key={num}
            exact
            href={getLink(num)}
            className="inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium"
            inactiveClassName="border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300"
            activeClassName="border-primary-500 text-primary-600"
          >
            {num}
          </ActiveLink>
        ))}
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        {hasNextPage && (
          <ActiveLink
            href={getLink(currentPage + 1)}
            className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-neutral-500 hover:border-neutral-300 hover:text-neutral-700"
          >
            Next
            <ArrowLongRightIcon className="ml-3 h-5 w-5 text-neutral-400" aria-hidden="true" />
          </ActiveLink>
        )}
      </div>
    </nav>
  );
};
