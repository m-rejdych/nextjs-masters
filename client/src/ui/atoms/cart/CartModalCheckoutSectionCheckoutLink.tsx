import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface Props {
  hasItems: boolean;
}

export const CartModalCheckoutSectionCheckoutLink = ({ hasItems }: Props) => (
  <div className="mt-6">
    <Link
      href="/checkout"
      className={twMerge(
        'flex items-center justify-center rounded-md border border-transparent bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700',
        !hasItems && 'pointer-events-none cursor-not-allowed opacity-30',
      )}
    >
      Checkout
    </Link>
  </div>
);
