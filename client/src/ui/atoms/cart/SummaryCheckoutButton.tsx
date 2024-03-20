import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface Props {
  hasItems: boolean;
}

export const SummaryCheckoutButton = ({ hasItems }: Props) => (
  <div className="mt-6">
    <Link
      href="/checkout"
      className={twMerge(
        'block w-full rounded-md border border-transparent bg-primary-600 px-4 py-3 text-center text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-50',
        !hasItems && 'pointer-events-none cursor-not-allowed opacity-30',
      )}
    >
      Checkout
    </Link>
  </div>
);
