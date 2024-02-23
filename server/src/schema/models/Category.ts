import { builder } from '@/schema/builder';

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
		description: t.exposeString('description'),
		products: t.relation('products'),
	}),
});
