import { ImageResponse } from 'next/og';
import { getProduct } from '@/api/products';

interface Props {
  params: {
    slug: string;
  };
}

export const contentType = 'image/png';
export const size = {
  width: 480,
  height: 830,
};

export default async function OpengraphProductImage({ params: { slug } }: Props) {
  const product = await getProduct({ slug });

  if (!product) {
    return new ImageResponse(<div>Product not found</div>);
  }

  const image = product.images[0];

  return new ImageResponse(
    (
      <div tw="w-[480px] h-[1024px] flex flex-col items-center bg-neutral-100">
        <h1 tw="text-2xl">{product.name}</h1>
        <h3 tw="text-md">{product.description}</h3>
        {image && <img src={image.url} alt={image.alt} width={480} height={640} />}
      </div>
    ),
    { height: size.height, width: size.width },
  );
}
