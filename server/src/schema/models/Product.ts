import { decodeGlobalID } from '@pothos/plugin-relay';
import { builder } from '@/schema/builder';

builder.prismaNode('Product', {
	id: { field: 'id' },
	fields: (t) => ({
		name: t.exposeString('name'),
		description: t.exposeString('description'),
		slug: t.exposeString('slug'),
		price: t.exposeFloat('price'),
		rating: t.exposeFloat('rating', { nullable: true }),
		createdAt: t.expose('createdAt', {
			type: 'Date',
		}),
		images: t.relation('images'),
		colors: t.relation('colors'),
		sizes: t.relation('sizes'),
		details: t.relation('details'),
		categories: t.relation('categories'),
		collections: t.relation('collections'),
		reviews: t.relation('reviews'),
		reviewCount: t.relationCount('reviews'),
	}),
});

builder.queryField('products', (t) =>
	t.prismaConnection({
		type: 'Product',
		edgesNullable: false,
		cursor: 'id',
		totalCount: async () => {
			return prisma.product.count();
		},
		resolve: async (query) => {
			return prisma.product.findMany({ ...query });
		},
	}),
);

builder.queryField('product', (t) =>
	t.prismaField({
		type: 'Product',
		nullable: true,
		args: {
			id: t.arg({
				type: 'ID',
				required: true,
			}),
		},
		resolve: async (query, _, args) => {
			return prisma.product.findUnique({
				...query,
				where: { id: decodeGlobalID(args.id as string).id },
			});
		},
	}),
);
