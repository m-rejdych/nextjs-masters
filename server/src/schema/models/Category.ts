import { builder } from '@/schema/builder';
import { prisma } from '@/util/prisma';

enum CategoryName {
	BASICS = 'BASICS',
	T_SHIRTS = 'T_SHIRTS',
	HOODIES = 'HOODIES',
	SHIRTS = 'SHIRTS',
	JEANS = 'JEANS',
	TROUSERS = 'TROUSERS',
	SHORTS = 'SHORTS',
	JACKETS = 'JACKETS',
	SWEATERS = 'SWEATERS',
	SHOES = 'SHOES',
	SOCKETS = 'SOCKETS',
	UNDERWEAR = 'UNDERWEAR',
}

builder.enumType(CategoryName, {
	name: 'CategoryName',
});

builder.prismaObject('Category', {
	fields: (t) => ({
		id: t.exposeID('id'),
		name: t.field({
			type: CategoryName,
			resolve: (category) => category.name as CategoryName,
		}),
		slug: t.exposeString('slug'),
		description: t.exposeString('description'),
		createdAt: t.expose('createdAt', { type: 'Date' }),
		updatedAt: t.expose('createdAt', { type: 'Date' }),
		products: t.relatedConnection('products', {
			cursor: 'id',
			edgesNullable: false,
			totalCount: true,
		}),
	}),
});

const CategoryWhere = builder.prismaWhere('Category', {
	name: 'CategoryWhere',
	fields: {
		name: CategoryName,
		slug: 'String',
	},
});

export const CategoryListFilter = builder.prismaListFilter(CategoryWhere, {
	name: 'CategoriesFilter',
	ops: ['some'],
});

builder.queryField('categories', (t) =>
	t.prismaField({
		type: ['Category'],
		args: {
			where: t.arg({ type: CategoryWhere }),
		},
		resolve: async (query, _, { where }) => {
			return prisma.category.findMany({ ...query, where: where ?? undefined });
		},
	}),
);
