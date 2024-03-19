import { CartModalCheckoutSectionPrice } from '@/ui/atoms/cart/CartModalCheckoutSectionPrice';
import { CartModalCheckoutSectionCheckoutLink } from '@/ui/atoms/cart/CartModalCheckoutSectionCheckoutLink';
import { CartModalCheckoutSectionHomeLink } from '@/ui/atoms/cart/CartModalCheckoutSectionHomeLink';
import { getCookieOrder } from '@/util/order';

export const CartModalCheckoutSection = async () => {
  const order = await getCookieOrder();

  return (
    <div className="border-t border-neutral-200 px-4 py-6 sm:px-6">
      <CartModalCheckoutSectionPrice total={order?.total ?? 0} />
      <p className="mt-0.5 text-sm text-neutral-500">Shipping and taxes calculated at checkout.</p>
      <CartModalCheckoutSectionCheckoutLink hasItems={!!order?.items.length} />
      <CartModalCheckoutSectionHomeLink />
    </div>
  );
};
