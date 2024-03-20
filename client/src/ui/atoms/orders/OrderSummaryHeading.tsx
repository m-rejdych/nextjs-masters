import type { OrderStatus } from '@/gql/graphql';

interface Props {
  status: OrderStatus;
}

export const OrderSummaryHeading = ({ status }: Props) => {
  const getStatusHeading = (): string => {
    switch (status) {
      case 'PAID':
      case 'FULFILLED':
        return 'Payment successful';
      case 'CANCELLED':
        return 'Payment cancelled';
      case 'CREATED':
        return 'Waiting for your payment';
      case 'PROCESSING_PAYMENT':
        return 'Processing payment';
      case 'FAILED':
      default:
        return 'Payment failed';
    }
  };

  const getStatusDescription = (): string => {
    switch (status) {
      case 'PAID':
      case 'FULFILLED':
        return 'Ready to go! We will let you know when your order is on its way.';
      case 'CANCELLED':
        return 'Your payment was cancelled. Please, try again.';
      case 'CREATED':
        return 'Your move! Please, confirm your payment and we will let you know when it is finished.';
      case 'PROCESSING_PAYMENT':
        return 'Your payment is being processed. We will let you know when it is finished.';
      case 'FAILED':
      default:
        return 'Something went wrong. Please, try again.';
    }
  };

  return (
    <>
      <h1 className="text-sm font-medium text-primary-600">{getStatusHeading()}</h1>
      <p className="mt-2 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
        Thanks for ordering
      </p>
      <p className="mt-2 text-base text-neutral-500">{getStatusDescription()}</p>
    </>
  );
};
