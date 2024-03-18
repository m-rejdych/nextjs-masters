import Link from 'next/link';
import Image from 'next/image';
import { formatDolars } from '@/util/currency';
import type { OrderItemFragment } from '@/gql/graphql';

export const OrderSummaryItemsListItem = ({
  product,
  color,
  size,
  total,
  quantity,
}: OrderItemFragment) => {
  return (
    <li className="flex space-x-6 py-6">
      {product.images[0] && (
        <Image
          width={400}
          height={400}
          src={product.images[0].url}
          alt={product.images[0].alt}
          className="h-24 w-24 flex-none rounded-md bg-neutral-100 object-cover object-center"
        />
      )}
      <div className="flex-auto space-y-1">
        <h3 className="text-neutral-900">
          <Link href={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        <p>Quantity: {quantity}</p>
        <p>{color.name}</p>
        <p>{size.type}</p>
      </div>
      <p className="flex-none font-medium text-neutral-900">{formatDolars(total / 100)}</p>
    </li>
  );
};
