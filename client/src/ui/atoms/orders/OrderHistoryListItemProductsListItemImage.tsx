import Image from 'next/image';
import type { OrderListItemItemProductFragment } from '@/gql/graphql';

interface Props {
  images: OrderListItemItemProductFragment['images'];
}

export const OrderHistoryListItemProductsListItemImage = ({ images }: Props) => {
  const image = images[0];

  return (
    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-200 sm:h-40 sm:w-40">
      {image && (
        <Image
          width={400}
          height={400}
          src={image.url}
          alt={image.alt}
          className="h-full w-full object-cover object-center"
        />
      )}
    </div>
  );
};
