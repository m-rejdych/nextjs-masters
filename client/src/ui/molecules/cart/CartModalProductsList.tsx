import { CartModalProductsListItem } from '@/ui/molecules/cart/CartModalProductsListItem';
import { getCookieOrder } from '@/util/order';

export const CartModalProductsList = async () => {
  const order = await getCookieOrder();

  const items = order?.items ?? [];

  return items.length ? (
    <ul role="list" className="-my-6 divide-y divide-neutral-200">
      {items.map((item) => (
        <CartModalProductsListItem key={item.id} {...item} />
      ))}
    </ul>
  ) : (
    <h3 className="mt-8 text-center text-xl text-neutral-600">No items in your cart</h3>
  );
};
