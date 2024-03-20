import { formatDolars } from '@/util/currency';
import type { OrderItemFragment } from '@/gql/graphql';

interface Props {
  total: OrderItemFragment['total'];
}

export const CartModalCheckoutSectionPrice = ({ total }: Props) => (
  <div className="flex justify-between text-base font-medium text-neutral-900">
    <p>Subtotal</p>
    <p>{formatDolars(total / 100)}</p>
  </div>
);
