import { ReviewsList } from '@/ui/molecules/reviews/ReviewsList';
import type { ProductFragment } from '@/gql/graphql';

interface Props {
  productId: ProductFragment['id'];
  limit?: number;
  title?: string;
}

export const Reviews = ({ productId, limit, title }: Props) => (
  <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-lg font-medium text-neutral-900">{title ?? 'Recent reviews'}</h2>
      <ReviewsList productId={productId} limit={limit} />
    </div>
  </div>
);
