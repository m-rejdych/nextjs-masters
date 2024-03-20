import Image from 'next/image';
import type { OrderItemProductFragment } from '@/gql/graphql';

interface Props {
  image?: OrderItemProductFragment['images'][number];
}

export const CartModalProductsListItemImage = ({ image }: Props) => (
  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-neutral-200">
    {image && (
      <Image
        src={image.url}
        alt={image.alt}
        width={400}
        height={400}
        className="h-full w-full object-cover object-center"
      />
    )}
  </div>
);
