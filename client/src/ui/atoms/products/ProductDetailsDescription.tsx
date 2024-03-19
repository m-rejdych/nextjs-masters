import type { ProductFragment } from '@/gql/graphql';

interface Props {
  description: ProductFragment['description'];
}

export const ProductDetailsDescription = ({ description }: Props) => (
  <div className="mt-10">
    <h2 className="text-sm font-medium text-neutral-900">Description</h2>
    <div className="prose prose-sm mt-4 text-neutral-500">
      <p>{description}</p>
    </div>
  </div>
);
