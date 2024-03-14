import { ReviewsList } from '@/ui/molecules/reviews/ReviewsList';
import type { ProductFragment } from '@/gql/graphql';

interface Props {
  productId: ProductFragment['id'];
}

export const Reviews = ({ productId }: Props) => (
  <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-lg font-medium text-gray-900">Recent reviews</h2>
      <ReviewsList productId={productId} />
    </div>
  </div>
);
