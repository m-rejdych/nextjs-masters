import Link from 'next/link';

export const CartModalCheckoutSectionHomeLink = () => (
  <div className="mt-6 flex justify-center text-center text-sm text-neutral-500">
    <p>
      or{' '}
      <Link
        className="w-full text-center font-medium text-primary-600 hover:text-primary-500"
        href="/"
      >
        Continue Shopping
        <span aria-hidden="true"> &rarr;</span>
      </Link>
    </p>
  </div>
);
