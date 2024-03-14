import { notFound } from 'next/navigation';
import { ProductsList } from '@/ui/molecules/products/ProductsList';
import { Pagination } from '@/ui/molecules/nav/Pagination';
import { ProductsHero } from '@/ui/organisms/ProductsHero';
import { getProducts } from '@/api/products';
import { capitalize, removeDashes } from '@/util/formatStr';
import { getOrderBy, type SortOrderParam, type SortTypeParam } from '@/util/products';

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

export default async function CollectionPage({
  params: { slug, currentPage },
  searchParams: { sortBy, sortOrder },
}: Props) {
  const products = await getProducts({
    take: 20,
    offset: (Number(currentPage) - 1) * 20,
    where: {
      collections: { some: { slug } },
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
        totalPages={Math.ceil(products.totalCount / 20)}
        directory="collections"
        slug={slug}
      />
    </main>
  );
}
