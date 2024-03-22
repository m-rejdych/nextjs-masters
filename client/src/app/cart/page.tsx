import { Cart } from '@/ui/organisms/Cart';

export const metadata = {
  title: 'Cart',
  description: 'Cart page',
};

export const dynamic = 'force-dynamic';

export default function CartPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <Cart />
      </div>
    </div>
  );
}
