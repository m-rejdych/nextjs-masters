import { SummaryList } from '@/ui/molecules/cart/SummaryList';
import { SummaryCheckoutButton } from '@/ui/atoms/cart/SummaryCheckoutButton';
import { SummaryHeading } from '@/ui/atoms/cart/SummaryHeading';
import type { OrderFragment } from '@/gql/graphql';

interface Props {
  total: OrderFragment['total'];
}

export const Summary = ({ total }: Props) => (
  <section
    aria-labelledby="summary-heading"
    className="mt-16 rounded-lg bg-neutral-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
  >
    <SummaryHeading />
    <SummaryList total={total} />
    <SummaryCheckoutButton />
  </section>
);
