import fs from 'fs/promises';
import path from 'path';
import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const PRODUCTS_COUNT = 100 as const;
const STATIC_URL = `${process.env.SERVER_URL}/static` as const;
const CLIENT_URL = process.env.CLIENT_URL ?? process.env.VERCEL_URL ?? 'http://localhost:4000';

(async () => {
  try {
    //    const fakeStoreProducts = (await (
    //      await fetch('https://fakestoreapi.com/products')
    //    ).json()) as Array<{ image: string }>;
    //    const dummyJsonProducts = (await (await fetch('https://dummyjson.com/products')).json()) as {
    //      products: Array<{ images: string[] }>;
    //    };
    //    const images = [
    //      ...fakeStoreProducts.map(({ image }) => image),
    //      ...dummyJsonProducts.products.map(({ images }) => images),
    //    ].flat();
    const clothingImages = (
      await fs.readdir(path.join(process.cwd(), 'public/categories/clothing'))
    ).map((file) => `${STATIC_URL}/categories/clothing/${file}`);
    const accessoriesImages = (
      await fs.readdir(path.join(process.cwd(), 'public/categories/accessories'))
    ).map((file) => `${STATIC_URL}/categories/accessories/${file}`);
    const jewelryImages = (
      await fs.readdir(path.join(process.cwd(), 'public/categories/jewelry'))
    ).map((file) => `${STATIC_URL}/categories/jewelry/${file}`);
    const cosmeticsImages = (
      await fs.readdir(path.join(process.cwd(), 'public/categories/cosmetics'))
    ).map((file) => `${STATIC_URL}/categories/cosmetics/${file}`);
    const images = [clothingImages, accessoriesImages, jewelryImages, cosmeticsImages];

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

        const randomImageSetIdx = Math.floor(Math.random() * images.length);

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
                url: images[randomImageSetIdx]![Math.floor(Math.random() * images[randomImageSetIdx]!.length)] as string,
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
              connect: { id: categoryIds[randomImageSetIdx] },
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

    const res = await fetch(
      process.env.CLIENT_URL ?? process.env.VERCEL_URL ?? `${CLIENT_URL}/api/products/revalidate`,
      { method: 'POST' },
    );
    console.log(await res.json());
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();

    const res = await fetch(
      process.env.CLIENT_URL ?? process.env.VERCEL_URL ?? `${CLIENT_URL}/api/products/revalidate`,
      { method: 'POST' },
    );
    console.log(await res.json());
  }
})().catch((error) => console.log(error));
