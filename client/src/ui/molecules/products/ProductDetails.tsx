import { ProductDetailsDescription } from '@/ui/atoms/products/ProductDetailsDescription';
import { ProductDetailsList } from '@/ui/atoms/products/ProductDetailsList';
import type { ProductFragment } from '@/gql/graphql';

interface Props {
  description: ProductFragment['description'];
  details: ProductFragment['details'];
}

export const ProductDetails = ({ description, details }: Props) => (
  <>
    <ProductDetailsDescription description={description} />
    <div className="mt-8 border-t border-neutral-200 pt-8">
      <h2 className="text-sm font-medium text-neutral-900">Fabric &amp; Care</h2>

      <div className="prose prose-sm mt-4 text-neutral-500">
        <ProductDetailsList details={details} />
      </div>
    </div>
  </>
);
