import { decodeGlobalID } from '@pothos/plugin-relay';
import { builder } from '@/schema/builder';
import { prisma } from '@/util/prisma';
import { decodeProductWhereId } from '@/util/products';
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
		updatedAt: t.expose('updatedAt', {
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

const StringFilter = builder.prismaFilter('String', {
  name: 'StringFilter',
  ops: ['contains', 'is', 'mode'],
});

const ProductWhereNot = builder.prismaWhere('Product', {
	name: 'ProductWhereNot',
	fields: {
		id: 'String',
	},
});

const ProductWhereAnd = builder.prismaWhere('Product', {
	name: 'ProductWhereAnd',
	fields: {
		id: 'String',
		slug: 'String',
    name: StringFilter,
		categories: CategoryListFilter,
		collections: CollectionListFilter,
		NOT: ProductWhereNot,
	},
});

const ProductWhere = builder.prismaWhere('Product', {
	name: 'ProductWhere',
	fields: {
		id: 'String',
		slug: 'String',
    name: StringFilter,
		categories: CategoryListFilter,
		collections: CollectionListFilter,
		NOT: ProductWhereNot,
		AND: ProductWhereAnd,
	},
});

export type ProductWhereInput = typeof ProductWhere.$inferInput;

builder.queryField('products', (t) =>
	t.prismaConnection({
		type: 'Product',
		edgesNullable: false,
		cursor: 'id',
		args: {
			where: t.arg({ type: ProductWhere }),
		},
		totalCount: async (_, { where }) => {
			return prisma.product.count({ where: where ? decodeProductWhereId(where) : undefined });
		},
		resolve: async (query, _, { where }) => {
			return prisma.product.findMany({
				...query,
				where: where ? decodeProductWhereId(where) : undefined,
			});
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
