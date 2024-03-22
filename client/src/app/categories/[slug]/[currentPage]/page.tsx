import { notFound } from 'next/navigation';
import { ProductsList } from '@/ui/molecules/products/ProductsList';
import { Pagination } from '@/ui/molecules/nav/Pagination';
import { ProductsHero } from '@/ui/organisms/ProductsHero';
import { getProducts } from '@/api/products';
import { capitalize, removeDashes } from '@/util/formatStr';
import { getOrderBy, type SortTypeParam, type SortOrderParam } from '@/util/products';

interface Params {
  slug: string;
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

export const generateMetadata = ({ params: { slug } }: Props) => ({
  title: capitalize(removeDashes(slug)),
  description: `All products in the ${capitalize(removeDashes(slug))} category`,
});

export default async function CategoryPage({
  params: { slug, currentPage },
  searchParams: { sortOrder, sortBy },
}: Props) {
  const products = await getProducts({
    take: 18,
    offset: (Number(currentPage) - 1) * 18,
    where: {
      categories: { some: { slug } },
    },
    orderBy: getOrderBy(sortBy, sortOrder),
  });

  if (!products?.data.length) {
    return notFound();
  }

  return (
    <main>
      <ProductsHero title={capitalize(removeDashes(slug))} />
      <ProductsList products={products.data} />
      <Pagination
        hasNextPage={products.hasNextPage}
        hasPreviousPage={products.hasPreviousPage}
        currentPage={Number(currentPage)}
        totalPages={Math.ceil(products.totalCount / 18)}
        directory="categories"
        slug={slug}
      />
    </main>
  );
}
