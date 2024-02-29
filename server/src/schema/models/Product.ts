import { decodeGlobalID } from '@pothos/plugin-relay';
import { builder } from '@/schema/builder';
import { prisma } from '@/util/prisma';
import { CategoryListFilter } from '@/schema/models/Category';
import { CollectionListFilter } from '@/schema/models/Collection';

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

const ProductsWhere = builder.prismaWhere('Product', {
	name: 'ProductsWhere',
	fields: {
		slug: 'String',
		categories: CategoryListFilter,
    collections: CollectionListFilter,
	},
});

builder.queryField('products', (t) =>
	t.prismaConnection({
		type: 'Product',
		edgesNullable: false,
		cursor: 'id',
		args: {
			where: t.arg({ type: ProductsWhere }),
		},
		totalCount: async () => {
			return prisma.product.count();
		},
		resolve: async (query, _, { where }) => {
			return prisma.product.findMany({ ...query, where: where ?? undefined });
		},
	}),
);

builder.queryField('productById', (t) =>
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
