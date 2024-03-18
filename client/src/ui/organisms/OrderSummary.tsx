import type { PaymentIntent } from '@stripe/stripe-js';
import { OrderSummaryItemsList } from '@/ui/molecules/order/OrderSummaryItemsList';
import { OrderSummaryHeading } from '@/ui/atoms/order/OrderSummaryHeading';
import { OrderSummaryTrackingNumber } from '@/ui/atoms/order/OrderSummaryTrackingNumber';
import { OrderSummaryPaymentDetails } from '@/ui/molecules/order/OrderSummaryPaymentDetails';
import { OrderSummaryReturnLink } from '@/ui/atoms/order/OrderSummaryReturnLink';
import type { OrderFragment, OrderStatus } from '@/gql/graphql';

interface Props {
  order: OrderFragment;
  paymentIntentStatus?: PaymentIntent['status'];
}

export const OrderSummary = ({
  order: { id, items, total, status },
  paymentIntentStatus,
}: Props) => {
  const getOrderStatus = (): OrderStatus => {
    if (!paymentIntentStatus) return status;

    switch (paymentIntentStatus) {
      case 'succeeded':
        return 'PAID';
      case 'canceled':
        return 'CANCELLED';
      case 'requires_action':
      case 'requires_confirmation':
      case 'requires_capture':
      case 'requires_payment_method':
        return 'CREATED';
      case 'processing':
        return 'PROCESSING_PAYMENT';
      default:
        return 'FAILED';
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24">
      <div className="lg:col-start-2">
        <OrderSummaryHeading status={getOrderStatus()} />
        <OrderSummaryTrackingNumber id={id} />
        <OrderSummaryItemsList items={items} />
        <OrderSummaryPaymentDetails total={total} />
        <div className="mt-16 border-t border-neutral-200 py-6 text-right">
          <OrderSummaryReturnLink />
        </div>
      </div>
    </div>
  );
};
