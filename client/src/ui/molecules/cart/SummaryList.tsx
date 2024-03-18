import { SummaryListItem } from '@/ui/atoms/cart/SummaryListItem';
import { formatDolars } from '@/util/currency';
import { getTaxValue, getShippingValue, getTotalOrderValue } from '@/util/products';
import type { OrderFragment } from '@/gql/graphql';

interface Props {
  total: OrderFragment['total'];
}

export const SummaryList = ({ total }: Props) => (
    <dl className="mt-6 space-y-4">
      <SummaryListItem title="Subtotal" details={formatDolars(total / 100)} />
      <SummaryListItem
        title="Shipping estimate"
        details={formatDolars(total && getShippingValue() / 100)}
      />
      <SummaryListItem
        title="Tax estimate"
        details={formatDolars(total && getTaxValue(total) / 100)}
      />
      <SummaryListItem
        title="Order total"
        details={formatDolars(total && getTotalOrderValue(total) / 100)}
      />
    </dl>
);
