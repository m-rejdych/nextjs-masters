import { notFound } from "next/navigation";
import { Reviews } from "@/ui/organisms/Reviews";
import { getProduct } from "@/api/products";

interface Params {
  slug: string;
}

interface Props {
  params: Params;
}

export default async function RewvievsPage({ params: { slug } }: Props) {
  const product = await getProduct({ slug });

  if (!product) {
    return notFound();
  }

  return <Reviews title={`${product.name} reviews`} productId={decodeURIComponent(product.id)} />;
}
