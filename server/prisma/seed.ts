import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const PRODUCTS_COUNT = 100 as const;
const CATEGORIES = [
	'Basics',
	'T-shirts',
	'Hoodies',
	'Shirts',
	'Jeans',
	'Trousers',
	'Shorts',
	'Jackets',
	'Sweaters',
	'Shoes',
	'Sockets',
	'Underwear',
] as const;
const COLLECTIONS = ['Man', 'Woman', 'Baby', 'New arrivals', 'Sport', 'Beauty'] as const;

const main = async () => {
	try {
		await prisma.category.deleteMany();
		await prisma.collection.deleteMany();
		await prisma.product.deleteMany();

		const categoryIds = await Promise.all(
			CATEGORIES.map(async (name) => {
				const createdCategory = await prisma.category.create({
					data: {
						name,
						description: faker.lorem.paragraph({ min: 2, max: 4 }),
					},
				});

				console.log(`Created category with id: ${createdCategory.id}`);

				return createdCategory.id;
			}),
		);

		const collectionIds = await Promise.all(
			COLLECTIONS.map(async (name) => {
				const createdCollection = await prisma.collection.create({
					data: {
						name,
						description: faker.lorem.paragraph({ min: 2, max: 4 }),
					},
				});

				console.log(`Created collection with id: ${createdCollection.id}`);

				return createdCollection.id;
			}),
		);

		await Promise.all(
			Array.from({ length: PRODUCTS_COUNT }, async () => {
				const name = faker.commerce.productName();
				const user = faker.person.firstName();

				const createdProduct = await prisma.product.create({
					data: {
						name,
						slug: faker.helpers.slugify(name).toLowerCase(),
						description: faker.commerce.productDescription(),
						price: parseInt(faker.commerce.price({ min: 1000, max: 5000 }), 10),
						images: {
							create: { url: faker.image.urlLoremFlickr({ category: 'clothes' }), alt: name },
						},
						rating: faker.number.int({ min: 1, max: 5 }),
						reviews: {
							createMany: {
								data: [
									{
										title: faker.word.adjective(),
										description: faker.lorem.paragraph({ min: 1, max: 5 }),
										rating: faker.number.int({ min: 1, max: 5 }),
										email: faker.internet.email({ firstName: user }),
										author: user,
									},
								],
							},
						},
						categories: {
							connect: { id: categoryIds[Math.floor(Math.random() * categoryIds.length)] },
						},
						collections: {
							connect: { id: collectionIds[Math.floor(Math.random() * collectionIds.length)] },
						},
					},
				});

				console.log(`Created product with id: ${createdProduct.id}`);
			}),
		);

		await prisma.$disconnect();
	} catch (error) {
		console.log(error);
		await prisma.$disconnect();
	}
};

await main();
