import type { Policy } from '@/types/products';

export const PoliciesListItem = ({ name, description, Icon }: Policy) => (
  <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-6 text-center">
    <dt>
      <Icon className="mx-auto h-6 w-6 flex-shrink-0 text-neutral-400" aria-hidden="true" />
      <span className="mt-4 text-sm font-medium text-neutral-900">{name}</span>
    </dt>
    <dd className="mt-1 text-sm text-neutral-500">{description}</dd>
  </div>
);
