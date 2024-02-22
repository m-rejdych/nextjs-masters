import { builder } from '@/schema/builder';

builder.prismaObject('Product', {
	fields: (t) => ({
		id: t.exposeID('id'),
		name: t.exposeString('name'),
		description: t.exposeString('description'),
		slug: t.exposeString('slug'),
		rating: t.exposeFloat('rating', { nullable: true }),
		createdAt: t.expose('createdAt', {
			type: 'Date',
		}),
		images: t.relation('images'),
		categories: t.relation('categories'),
		collections: t.relation('collections'),
		reviews: t.relation('reviews'),
	}),
});

builder.queryField('products', (t) =>
	t.prismaField({
		type: ['Product'],
		nullable: true,
		args: {
			take: t.arg.int({ defaultValue: 10 }),
			offset: t.arg.int({ defaultValue: 0 }),
		},
		resolve: async (query, _, { take, offset }) => {
			return prisma.product.findMany({
				...query,
				take: take ?? undefined,
				skip: offset ?? undefined,
			});
		},
	}),
);
