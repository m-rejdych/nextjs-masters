import { builder } from '@/schema/builder';

builder.prismaNode('Product', {
	id: { field: 'id' },
	fields: (t) => ({
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
	t.prismaConnection({
		type: 'Product',
		cursor: 'id',
		totalCount: async () => {
			return prisma.product.count();
		},
		resolve: async (query) => {
			return prisma.product.findMany({ ...query });
		},
	}),
);
