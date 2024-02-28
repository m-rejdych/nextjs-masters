import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import type { ProductFragment } from '@/gql/graphql';

interface Props {
	images: ProductFragment['images'];
}

export const ProductImagesGallery = ({ images }: Props) => (
	<div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
		<h2 className="sr-only">Images</h2>
		<div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
			{images.map(({ id, url, alt }, index) => (
				<Image
					key={id}
					src={url}
					alt={alt}
					width={640}
					height={480}
					className={twMerge(
						index === 0 ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block',
						'rounded-lg',
					)}
				/>
			))}
		</div>
	</div>
);
