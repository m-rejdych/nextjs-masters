import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProduct } from '@/api/products';
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

interface GenereateMetadataArgs {
	params: Params;
}

export const generateMetadata = async ({
	params: { id },
}: GenereateMetadataArgs): Promise<Metadata> => {
	const product = await getProduct(id);

	if (!product) {
		return {
			title: 'Product not found',
			description: 'Product not found',
		};
	}

	return {
		title: product.name,
		description: product.description,
	};
};

export default async function SingleProductPage({ params: { id } }: Props) {
	const product = await getProduct(id);

	if (!product) {
		return notFound();
	}

	const parsedProduct = parseProduct(product);

	return (
		<div className="bg-white">
			<div className="pb-16 pt-6 sm:pb-24">
				<div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
					<div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
						<div className="lg:col-span-5 lg:col-start-8">
							<ProductHeading name={parsedProduct.name} price={parsedProduct.price} />
							<ProductReviews
								rating={parsedProduct.rating}
								reviewCount={parsedProduct.reviewCount}
							/>
						</div>
						<ProductImagesGallery images={parsedProduct.images} />
						<div className="mt-8 lg:col-span-5">
							<ProductOptionsForm sizes={parsedProduct.sizes} colors={parsedProduct.colors} />
							<ProductDetails
								description={parsedProduct.description}
								details={parsedProduct.details}
							/>
							<Policies />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}