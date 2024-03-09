import { SummaryListItem } from '@/ui/atoms/cart/SummaryListItem';
import { formatDolars } from '@/util/currency';
import type { OrderFragment } from '@/gql/graphql';

interface Props {
	total: OrderFragment['total'];
}

const TAX_RATE = 0.12 as const;
const SHIPPING = 700 as const;

export const SummaryList = ({ total }: Props) => {
	const taxEstimate = TAX_RATE * total;

	return (
		<dl className="mt-6 space-y-4">
			<SummaryListItem title="Subtotal" details={formatDolars(total / 100)} />
			<SummaryListItem title="Shipping estimate" details={formatDolars(SHIPPING / 100)} />
			<SummaryListItem title="Tax estimate" details={formatDolars(taxEstimate / 100)} />
			<SummaryListItem
				title="Order total"
				details={formatDolars((total + SHIPPING + taxEstimate) / 100)}
			/>
		</dl>
	);
};
