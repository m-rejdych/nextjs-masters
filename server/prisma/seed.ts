import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const PRODUCTS_COUNT = 100 as const;
const CATEGORIES = ['BASICS', 'HOODIES', 'SHIRTS', 'JACKETS'] as const;
const COLLECTIONS = ['NEW_ARRIVALS', 'SPORT', 'BEAUTY', 'ACCESSORIES'] as const;
const COLORS = ['BLACK', 'GRAY'] as const;
const SIZES = ['S', 'M', 'L', 'XL'] as const;

(async () => {
	try {
		await Promise.all([
			prisma.category.deleteMany(),
			prisma.collection.deleteMany(),
			prisma.productImage.deleteMany(),
			prisma.categoryImage.deleteMany(),
			prisma.collectionImage.deleteMany(),
			prisma.color.deleteMany(),
			prisma.size.deleteMany(),
			prisma.detail.deleteMany(),
			prisma.product.deleteMany(),
		]);

		const categoryIds = await Promise.all(
			CATEGORIES.map(async (name) => {
				const createdCategory = await prisma.category.create({
					data: {
						name,
						slug: faker.helpers.slugify(name).toLowerCase().replace('_', '-'),
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
						slug: faker.helpers.slugify(name).toLowerCase().replace('_', '-'),
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
								data: Array.from({ length: Math.floor(Math.random() * 10) + 1 }, () => ({
									title: faker.word.adjective(),
									description: faker.lorem.paragraph({ min: 1, max: 5 }),
									rating: faker.number.int({ min: 1, max: 5 }),
									email: faker.internet.email({ firstName: user }),
									author: user,
								})),
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
								data: COLORS.map((name) => ({
									name,
									inStock: faker.datatype.boolean(),
								})),
							},
						},
						sizes: {
							createMany: {
								data: SIZES.map((type) => ({
									type,
									inStock: faker.datatype.boolean(),
								})),
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
	} catch (error) {
		console.log(error);
		await prisma.$disconnect();
	}
})().catch((error) => console.log(error));
