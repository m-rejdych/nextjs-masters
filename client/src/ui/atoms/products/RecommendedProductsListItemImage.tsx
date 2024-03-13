import Image from 'next/image';
import type { ProductListItemFragment } from '@/gql/graphql';

interface Props {
  image: ProductListItemFragment['images'][number];
}

export const RecommendedProductsListItemImage = ({ image: { url, alt } }: Props) => (
  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-neutral-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
    <Image
      width={480}
      height={640}
      src={url}
      alt={alt}
      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
    />
  </div>
);
