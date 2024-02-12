import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const COUNT = 9;

const main = async () => {
	try {
		await Promise.all(
			Array.from({ length: COUNT }, async () => {
				const name = faker.commerce.productName();

				const createdProduct = await prisma.product.create({
					data: {
						name,
						slug: faker.helpers.slugify(name).toLowerCase(),
						description: faker.commerce.productDescription(),
						price: parseInt(faker.commerce.price(), 10),
						image: faker.image.url(),
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
