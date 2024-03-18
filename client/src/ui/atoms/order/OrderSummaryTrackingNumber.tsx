import type { OrderItemFragment } from '@/gql/graphql';

interface Props {
  id: OrderItemFragment['id'];
}

export const OrderSummaryTrackingNumber = ({ id }: Props) => (
  <dl className="mt-16 text-sm font-medium">
    <dt className="text-neutral-900">Tracking number</dt>
    <dd className="mt-2 text-primary-600">{id}</dd>
  </dl>
);
