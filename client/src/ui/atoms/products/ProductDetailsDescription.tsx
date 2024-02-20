import type { ExtendedProduct } from '@/types/products';

interface Props {
	description: ExtendedProduct['description'];
}

export const ProductDetailsDescription = ({ description }: Props) => (
	<div className="mt-10">
		<h2 className="text-sm font-medium text-gray-900">Description</h2>
		<div className="prose prose-sm mt-4 text-gray-500">
			<p>{description}</p>
		</div>
	</div>
);
