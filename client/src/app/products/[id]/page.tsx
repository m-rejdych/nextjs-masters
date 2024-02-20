import { PRODUCTS } from '@/constants/products';
import { parseProduct } from '@/util/products';
import { ProductHeading } from '@/ui/atoms/products/ProductHeading';
import { ProductReviews } from '@/ui/molecules/products/ProductReviews';
import { ProductImagesGallery } from '@/ui/molecules/products/ProductImagesGallery';
import { ProductOptionsForm } from '@/ui/organisms/ProductOptionsForm';
import { ProductDetails } from '@/ui/molecules/products/ProductDetails';
import { Policies } from '@/ui/organisms/Policies';
import type { ExtendedProduct } from '@/types/products';

interface Params {
	id: ExtendedProduct['id'];
}

interface Props {
	params: Params;
}

export default function SingleProductPage({ params: { id } }: Props) {
	const product = (() => {
		const foundProduct = PRODUCTS.find((p) => p.id === id);
		if (!foundProduct) return null;

		return parseProduct(foundProduct);
	})();

	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<div className="bg-white">
			<div className="pb-16 pt-6 sm:pb-24">
				<div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
					<div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
						<div className="lg:col-span-5 lg:col-start-8">
							<ProductHeading name={product.name} price={product.price} />
							<ProductReviews rating={product.rating} reviewCount={product.reviewCount} />
						</div>
						<ProductImagesGallery images={product.images} />
						<div className="mt-8 lg:col-span-5">
							<ProductOptionsForm sizes={product.sizes} colors={product.colors} />
							<ProductDetails description={product.description} details={product.details} />
							<Policies />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
