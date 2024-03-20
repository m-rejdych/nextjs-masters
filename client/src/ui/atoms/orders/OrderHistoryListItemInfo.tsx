import { parseDate, parseTime } from '@/util/date';
import { formatDolars } from '@/util/currency';
import type { OrderListItemFragment } from '@/gql/graphql';

interface Props {
  id: OrderListItemFragment['id'];
  createdAt: OrderListItemFragment['createdAt'];
  total: OrderListItemFragment['total'];
}

export const OrderHistoryListItemInfo = ({ id, createdAt, total }: Props) => (
  <dl className="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
    <div>
      <dt className="font-medium text-neutral-900">Order number</dt>
      <dd className="mt-1 text-neutral-500">{id}</dd>
    </div>
    <div className="hidden sm:block">
      <dt className="font-medium text-neutral-900">Date placed</dt>
      <dd className="mt-1 text-neutral-500">
        <time dateTime={parseTime(createdAt)}>{parseDate(createdAt)}</time>
      </dd>
    </div>
    <div>
      <dt className="font-medium text-neutral-900">Total amount</dt>
      <dd className="mt-1 font-medium text-neutral-900">{formatDolars(total / 100)}</dd>
    </div>
  </dl>
);
