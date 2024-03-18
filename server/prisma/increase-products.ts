import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const PRODUCTS_COUNT = 100 as const;

(async () => {
  try {
    const fakeStoreProducts = (await (
      await fetch('https://fakestoreapi.com/products')
    ).json()) as Array<{ image: string }>;
    const dummyJsonProducts = (await (await fetch('https://dummyjson.com/products')).json()) as {
      products: Array<{ images: string[] }>;
    };
    const images = [
      ...fakeStoreProducts.map(({ image }) => image),
      ...dummyJsonProducts.products.map(({ images }) => images),
    ].flat();

    const categoryIds = (await prisma.category.findMany()).map(({ id }) => id);

    const collectionIds = (await prisma.collection.findMany()).map(({ id }) => id);

    const sizeIds = (await prisma.size.findMany()).map(({ id }) => id);

    const colorIds = (await prisma.color.findMany()).map(({ id }) => id);

    await Promise.all(
      Array.from({ length: PRODUCTS_COUNT }, async () => {
        const name = faker.commerce.productName();

        const ratings = Array.from({ length: Math.floor(Math.random() * 10) + 1 }, () =>
          faker.number.int({ min: 1, max: 5 }),
        );

        const createdProduct = await prisma.product.create({
          data: {
            name,
            slug: faker.helpers.slugify(name).toLowerCase(),
            description: faker.commerce.productDescription(),
            rating: ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length,
            price: parseInt(faker.commerce.price({ min: 1000, max: 5000 }), 10),
            images: {
              create: {
                //url: faker.image.urlLoremFlickr({ category: 'clothes', width: 480, height: 640 }),
                url: images[Math.floor(Math.random() * images.length)] as string,
                alt: name,
              },
            },
            reviews: {
              createMany: {
                data: ratings.map((rating) => {
                  const user = faker.person.firstName();
                  return {
                    rating,
                    title: faker.word.adjective(),
                    description: faker.lorem.paragraph({ min: 1, max: 5 }),
                    email: faker.internet.email({ firstName: user }),
                    author: user,
                  };
                }),
              },
            },
            categories: {
              connect: { id: categoryIds[Math.floor(Math.random() * categoryIds.length)] },
            },
            collections: {
              connect: { id: collectionIds[Math.floor(Math.random() * collectionIds.length)] },
            },
            colors: {
              createMany: {
                data: colorIds.map((colorId) => ({ colorId, inStock: true })),
              },
            },
            sizes: {
              createMany: {
                data: sizeIds.map((sizeId) => ({ sizeId, inStock: faker.datatype.boolean() })),
              },
            },
            details: {
              createMany: {
                data: Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => ({
                  description: faker.lorem.paragraph(1),
                })),
              },
            },
          },
        });

        console.log(`Created product with id: ${createdProduct.id}`);
      }),
    );

    await prisma.$disconnect();

    const baseUrl = process.env.CLIENT_URL ?? process.env.VERCEL_URL ?? 'http://localhost:3000';
    const res = await fetch(
      process.env.CLIENT_URL ?? process.env.VERCEL_URL ?? `${baseUrl}/api/products/revalidate`,
      { method: 'POST' },
    );
    console.log(await res.json());
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();

    const baseUrl = process.env.CLIENT_URL ?? process.env.VERCEL_URL ?? 'http://localhost:3000';
    const res = await fetch(
      process.env.CLIENT_URL ?? process.env.VERCEL_URL ?? `${baseUrl}/api/products/revalidate`,
      { method: 'POST' },
    );
    console.log(await res.json());
  }
})().catch((error) => console.log(error));
