import { ProductsSortOptionsType } from '@/ui/atoms/products/ProductsSortOptionsType';
import { ProductsSortOptionsOrder } from '@/ui/atoms/products/ProductsSortOptionsOrder';

export const ProductsSortOptions = () => (
  <section aria-labelledby="filter-heading" className="mb-8 border-t border-neutral-200 pt-6">
    <h2 id="filter-heading" className="sr-only">
      Product filters
    </h2>
    <div className="flex items-center">
      <ProductsSortOptionsType />
      <ProductsSortOptionsOrder />
    </div>
  </section>
);
