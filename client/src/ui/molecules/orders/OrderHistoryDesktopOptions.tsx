import Link from 'next/link';
import type { OrderListItemFragment } from '@/gql/graphql';

interface Props {
  id: OrderListItemFragment['id'];
}

export const OrderHistoryDesktopOptions = ({ id }: Props) => (
  <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
    <Link
      href={`/order/${id}`}
      className="flex items-center justify-center rounded-md border border-neutral-300 bg-white px-2.5 py-2 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
    >
      <span>View Order</span>
      <span className="sr-only">{id}</span>
    </Link>
    <Link
      href="#"
      className="flex items-center justify-center rounded-md border border-neutral-300 bg-white px-2.5 py-2 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
    >
      <span>View Invoice</span>
      <span className="sr-only">for order {id}</span>
    </Link>
  </div>
);
