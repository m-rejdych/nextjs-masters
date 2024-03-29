import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { getCookieOrderItemsCount } from '@/util/order';

export const DesktopMenuCartButton = async () => {
  let order = await getCookieOrderItemsCount();

  if (order && ['PAID', 'FULFILLED'].includes(order.status)) {
    order = null;
  }

  return (
    <div className="ml-4 flow-root lg:ml-8">
      <Link href="/cart" className="group -m-2 flex items-center p-2" scroll={false}>
        <ShoppingCartIcon
          className="h-6 w-6 flex-shrink-0 text-neutral-400 group-hover:text-neutral-500"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-neutral-700 group-hover:text-neutral-800">
          {order?.itemsCount ?? 0}
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </Link>
    </div>
  );
};
