import { formatDolars } from '@/util/currency';
import { getShippingValue, getTaxValue, getTotalOrderValue } from '@/util/products';
import type { OrderFragment } from '@/gql/graphql';

interface Props {
  total: OrderFragment['total'];
}

export const OrderSummaryPaymentDetails = ({ total }: Props) => (
  <dl className="space-y-6 border-t border-neutral-200 pt-6 text-sm font-medium text-neutral-500">
    <div className="flex justify-between">
      <dt>Subtotal</dt>
      <dd className="text-neutral-900">{formatDolars(total / 100)}</dd>
    </div>

    <div className="flex justify-between">
      <dt>Shipping</dt>
      <dd className="text-neutral-900">{formatDolars(total && getShippingValue() / 100)}</dd>
    </div>

    <div className="flex justify-between">
      <dt>Taxes</dt>
      <dd className="text-neutral-900">{formatDolars(total && getTaxValue(total) / 100)}</dd>
    </div>

    <div className="flex items-center justify-between border-t border-neutral-200 pt-6 text-neutral-900">
      <dt className="text-base">Total</dt>
      <dd className="text-base">{formatDolars(total && getTotalOrderValue(total) / 100)}</dd>
    </div>
  </dl>
);
