import Link from 'next/link';
import { formatDolars } from '@/util/currency';
import type { OrderItemFragment } from '@/gql/graphql';

interface Props {
  product: OrderItemFragment['product'];
  total: OrderItemFragment['total'];
  color: OrderItemFragment['color'];
  size: OrderItemFragment['size'];
}

export const CartModalProductsListItemInfo = ({ product, total, color, size }: Props) => (
  <div>
    <div className="flex justify-between text-base font-medium text-neutral-900">
      <h3>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </h3>
      <p className="ml-4">{formatDolars(total / 100)}</p>
    </div>
    <p className="mt-1 text-sm text-neutral-500">{color.name}</p>
    <p className="mt-1 text-sm text-neutral-500">{size.type}</p>
  </div>
);
