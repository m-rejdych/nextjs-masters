import Link from 'next/link';

export const SummaryCheckoutButton = () => (
  <div className="mt-6">
    <Link
      href="/checkout"
      className="block w-full rounded-md border border-transparent bg-primary-600 px-4 py-3 text-center text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-50"
    >
      Checkout
    </Link>
  </div>
);
