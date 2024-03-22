import { notFound } from 'next/navigation';
import { ProductsList } from '@/ui/molecules/products/ProductsList';
import { Pagination } from '@/ui/molecules/nav/Pagination';
import { ProductsHero } from '@/ui/organisms/ProductsHero';
import { getProducts } from '@/api/products';
import { getOrderBy, type SortOrderParam, type SortTypeParam } from '@/util/products';

interface Params {
  currentPage: string;
}

interface SearchParams {
  sortBy?: SortTypeParam;
  sortOrder?: SortOrderParam;
}

interface Props {
  params: Params;
  searchParams: SearchParams;
}

export const metadata = {
  title: 'All products',
  description: 'All you need',
};

export default async function ProductsPaginated({
  params: { currentPage },
  searchParams: { sortBy, sortOrder },
}: Props) {
  const products = await getProducts({
    take: 18,
    offset: (Number(currentPage) - 1) * 20,
    orderBy: getOrderBy(sortBy, sortOrder),
  });

  if (!products?.data.length) {
    return notFound();
  }

  return (
    <main>
      <ProductsHero title="All you need" />
      <ProductsList products={products.data} />
      <Pagination
        currentPage={Number(currentPage)}
        hasPreviousPage={products.hasPreviousPage}
        hasNextPage={products.hasNextPage}
        totalPages={Math.ceil(products.totalCount / 18)}
        directory="products"
      />
    </main>
  );
}
