interface Props {
	title: string;
	details: string | number;
}

export const SummaryListItem = ({ title, details }: Props) => (
	<div className="flex items-center justify-between [&:not(:first-child)]:border-t [&:not(:first-child)]:border-neutral-200 [&:not(:first-child)]:pt-4">
		<dt className="flex items-center text-sm text-neutral-600">{title}</dt>
		<dd className="text-sm font-medium text-neutral-900">{details}</dd>
	</div>
);
