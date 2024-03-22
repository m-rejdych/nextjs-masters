import { getProducts } from '@/api/products';
import { ProductsList } from '@/ui/molecules/products/ProductsList';

interface Props {
  searchParams: { query?: string };
}

export default async function SearchPage({ searchParams }: Props) {
  const query = searchParams.query;
  const products = await getProducts({
    take: 18,
    where: {
      name: { contains: query, mode: 'Insensitive' },
    },
  });

  return (
    <main>
      <ProductsList products={products?.data ?? []} />
    </main>
  );
}
