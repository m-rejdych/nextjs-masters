import Image from 'next/image';
import type { OrderItemProductFragment } from '@/gql/graphql';

interface Props {
  url: OrderItemProductFragment['images'][number]['url'];
  alt: OrderItemProductFragment['images'][number]['alt'];
}

export const CartProductsListItemImage = ({ url, alt }: Props) => (
  <div className="flex-shrink-0">
    <Image
      width={480}
      height={640}
      src={url}
      alt={alt}
      className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
    />
  </div>
);
