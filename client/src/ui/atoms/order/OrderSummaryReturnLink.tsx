import Link from 'next/link';

export const OrderSummaryReturnLink = () => (
  <Link href="/" className="text-sm font-medium text-primary-600 hover:text-primary-500">
    Continue Shopping
    <span aria-hidden="true"> &rarr;</span>
  </Link>
);
