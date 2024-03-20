import Link from 'next/link';
import type { OrderListItemItemProductFragment } from '@/gql/graphql';

interface Props {
  slug: OrderListItemItemProductFragment['id'];
}

export const OrderHistoryListItemProductsListItemOptions = ({ slug }: Props) => (
  <div className="mt-6 flex items-center space-x-4 divide-x divide-neutral-200 border-t border-neutral-200 pt-4 text-sm font-medium sm:ml-4 sm:mt-0 sm:border-none sm:pt-0">
    <div className="flex flex-1 justify-center">
      <Link
        href={`/product/${slug}`}
        className="whitespace-nowrap text-primary-600 hover:text-primary-500"
      >
        View product
      </Link>
    </div>
  </div>
);
