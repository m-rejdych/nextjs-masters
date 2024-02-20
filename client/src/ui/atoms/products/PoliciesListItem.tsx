import type { Policy } from '@/types/products';

export const PoliciesListItem = ({ name, description, Icon }: Policy) => (
	<div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
		<dt>
			<Icon className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
			<span className="mt-4 text-sm font-medium text-gray-900">{name}</span>
		</dt>
		<dd className="mt-1 text-sm text-gray-500">{description}</dd>
	</div>
);
