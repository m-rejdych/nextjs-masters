import Link from 'next/link';
import { formatDolars } from '@/util/currency';
import type { Product as ProductType } from '@/types/products';

export const ProductListItem = ({
	id,
	name,
	description,
	price,
  images,
}: ProductType) => {
  const image = images[0];

  return (
	<li className="group relative flex cursor-pointer flex-col overflow-hidden rounded-lg border border-neutral-light bg-white">
  {image && (
		<div className="aspect-h-4 aspect-w-3 bg-neutral-light sm:aspect-none group-hover:opacity-75 sm:h-96">
			<img
				src={image.url}
				alt={image.alt}
				className="h-full w-full object-cover object-center sm:h-full sm:w-full"
			/>
		</div>
  )}
		<div className="flex flex-1 flex-col space-y-2 p-4">
			<h3 className="text-sm font-medium text-neutral-dark">
				<Link href={`/product/${id}`}>
					<span aria-hidden="true" className="absolute inset-0" />
					{name}
				</Link>
			</h3>
			<p className="text-sm text-neutral-main">{description}</p>
			<div className="flex flex-1 flex-col justify-end">
				<p className="text-base font-medium text-neutral-dark">{formatDolars(price / 100)}</p>
			</div>
		</div>
	</li>
)
}
;
