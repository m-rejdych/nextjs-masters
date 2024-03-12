import { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProduct } from '@/api/products';
import { ProductHeading } from '@/ui/atoms/products/ProductHeading';
import { ProductReviews } from '@/ui/molecules/products/ProductReviews';
import { ProductImagesGallery } from '@/ui/molecules/products/ProductImagesGallery';
import { ProductOptionsForm } from '@/ui/organisms/ProductOptionsForm';
import { ProductDetails } from '@/ui/molecules/products/ProductDetails';
import { Policies } from '@/ui/organisms/Policies';
import { RecommendedProducts } from '@/ui/organisms/RecommendedProducts';
import { Reviews } from '@/ui/organisms/Reviews';
import { ReviewForm } from '@/ui/organisms/ReviewForm';
import type { ProductFragment } from '@/gql/graphql';

interface Params {
	slug: ProductFragment['slug'];
}

interface Props {
	params: Params;
}

interface GenereateMetadataArgs {
	params: Params;
}

export const generateMetadata = async ({
	params: { slug },
}: GenereateMetadataArgs): Promise<Metadata> => {
	const product = await getProduct({ slug });

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

export default async function SingleProductPage({ params: { slug } }: Props) {
	const product = await getProduct({ slug });

	if (!product) {
		return notFound();
	}

	const decodedId = decodeURIComponent(product.id);

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
							<ProductOptionsForm
								sizes={product.sizes}
								colors={product.colors}
								productId={decodedId}
							/>
							<ProductDetails description={product.description} details={product.details} />
							<Policies />
						</div>
					</div>
					<Suspense fallback={null}>
						<Reviews productId={decodedId} />
					</Suspense>
          <ReviewForm />
					{!!product.categories[0] && !!product.collections[0] && (
						<Suspense fallback={null}>
							<RecommendedProducts
								productId={decodedId}
								categoryId={product.categories[0].id}
								collectionId={product.collections[0].id}
							/>
						</Suspense>
					)}
				</div>
			</div>
		</div>
	);
}
