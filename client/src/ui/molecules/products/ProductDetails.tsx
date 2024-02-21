import { ProductDetailsDescription } from '@/ui/atoms/products/ProductDetailsDescription';
import { ProductDetailsList } from '@/ui/atoms/products/ProductDetailsList';
import type { ExtendedProduct } from '@/types/products';

interface Props {
	description: ExtendedProduct['description'];
	details: ExtendedProduct['details'];
}

export const ProductDetails = ({ description, details }: Props) => (
	<>
		<ProductDetailsDescription description={description} />
		<div className="mt-8 border-t border-gray-200 pt-8">
			<h2 className="text-sm font-medium text-gray-900">Fabric &amp; Care</h2>

			<div className="prose prose-sm mt-4 text-gray-500">
				<ProductDetailsList details={details} />
			</div>
		</div>
	</>
);
