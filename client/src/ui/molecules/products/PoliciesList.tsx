import { PoliciesListItem } from '@/ui/atoms/products/PoliciesListItem';
import { POLICIES } from '@/constants/products';

export const PoliciesList = () => (
  <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
    {POLICIES.map(({ name, Icon, description }) => (
      <PoliciesListItem key={name} name={name} Icon={Icon} description={description} />
    ))}
  </dl>
);
