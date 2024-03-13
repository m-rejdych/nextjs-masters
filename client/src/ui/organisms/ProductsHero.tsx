import { ProductsHeroHeading } from '@/ui/atoms/products/ProductsHeroHeading';
import { ProductsSortOptions } from '@/ui/molecules/products/ProductsSortOptions';

interface Props {
  title: string;
}

export const ProductsHero = ({ title }: Props) => (
  <>
    <ProductsHeroHeading title={title} />
    <ProductsSortOptions />
  </>
);
