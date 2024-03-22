import { Summary } from '@/ui/molecules/cart/Summary';
import { CartProductsList } from '@/ui/molecules/cart/CartProductsList';
import { CartHeading } from '@/ui/atoms/cart/CartHeading';
import { getCookieOrder } from '@/util/order';

export const Cart = async () => {
  const order = await getCookieOrder();

  return (
    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
      <section aria-labelledby="cart-heading" className="lg:col-span-7">
        <CartHeading />
        {order?.items.length ? (
          <CartProductsList items={order.items} />
        ) : (
          <div className="flex min-h-[450px] items-center justify-center">
            <h3 className="text-2xl text-neutral-600">No items in your cart</h3>
          </div>
        )}
      </section>
      <Summary hasItems={!!order?.items.length} total={order?.total ?? 0} />
    </div>
  );
};
