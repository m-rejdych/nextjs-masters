import Link from 'next/link';
import type { ProductListItemFragment } from '@/gql/graphql';

interface Props {
  name: ProductListItemFragment['name'];
  slug: ProductListItemFragment['slug'];
}

export const ProductListItemHeading = ({ name, slug }: Props) => (
  <h3 className="text-sm font-medium text-neutral-dark">
    <Link href={`/product/${slug}`}>
      <span aria-hidden="true" className="absolute inset-0" />
      {name}
    </Link>
  </h3>
);
