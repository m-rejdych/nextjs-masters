import { parseTime, parseDate } from '@/util/date';
import type { OrderListItemFragment } from '@/gql/graphql';

interface Props {
  createdAt: OrderListItemFragment['createdAt'];
}

export const OrdersHistoryListItemHeading = ({ createdAt }: Props) => (
  <h3 className="sr-only">
    Order placed on <time dateTime={parseTime(createdAt)}>{parseDate(createdAt)}</time>
  </h3>
);
