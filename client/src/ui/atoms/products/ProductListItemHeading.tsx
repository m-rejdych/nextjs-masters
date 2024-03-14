import Link from 'next/link';
import type { ProductListItemFragment } from '@/gql/graphql';

interface Props {
  name: ProductListItemFragment['name'];
  slug: ProductListItemFragment['slug'];
}

export const ProductListItemHeading = ({ name, slug }: Props) => (
  <Link href={`/product/${slug}`}>
    <h3 className="text-sm font-medium text-neutral-dark">
      <span aria-hidden="true" className="absolute inset-0" />
      {name}
    </h3>
  </Link>
);
