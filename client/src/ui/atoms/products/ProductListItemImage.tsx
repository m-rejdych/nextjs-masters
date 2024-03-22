import Image from 'next/image';
import type { ProductListItemFragment } from '@/gql/graphql';

interface Props {
  url: ProductListItemFragment['images'][0]['url'];
  alt: ProductListItemFragment['images'][0]['url'];
}

export const ProductListItemImage = ({ alt, url }: Props) => (
  <div className="aspect-h-4 aspect-w-3 bg-neutral-light sm:aspect-none group-hover:opacity-75 sm:h-96">
    <Image
      src={url}
      alt={alt}
      height={800}
      width={800}
      className="h-full w-full object-cover object-center sm:h-full sm:w-full"
    />
  </div>
);
