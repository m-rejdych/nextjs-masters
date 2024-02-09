import { formatDolars } from '@/util/currency';
import type { Product as ProductType } from '@/types/products';

type Props = Omit<ProductType, 'id'>;

export const Product = ({ name, description, price, img: { src, alt } }: Props) => (
	<div className="group relative flex cursor-pointer flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
		<div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
			<img
				src={src}
				alt={alt}
				className="h-full w-full object-cover object-center sm:h-full sm:w-full"
			/>
		</div>
		<div className="flex flex-1 flex-col space-y-2 p-4">
			<h3 className="text-sm font-medium text-gray-900">
				<span aria-hidden="true" className="absolute inset-0" />
				{name}
			</h3>
			<p className="text-sm text-gray-500">{description}</p>
			<div className="flex flex-1 flex-col justify-end">
				<p className="text-base font-medium text-gray-900">{formatDolars(price / 100)}</p>
			</div>
		</div>
	</div>
);
