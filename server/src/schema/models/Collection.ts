import { builder } from '@/schema/builder';

enum CollectionName {
	MAN = 'MAN',
	WOMAN = 'WOMAN',
	BABY = 'BABY',
	NEW_ARRIVALS = 'NEW_ARRIVALS',
	SPORT = 'SPORT',
	BEAUTY = 'BEAUTY',
}

builder.enumType(CollectionName, {
	name: 'CollectionName',
});

builder.prismaObject('Collection', {
	fields: (t) => ({
		id: t.exposeID('id'),
		name: t.field({
			type: CollectionName,
			resolve: (collection) => collection.name as CollectionName,
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

const CollectionWhere = builder.prismaWhere('Collection', {
	name: 'CollectionWhere',
	fields: {
		name: CollectionName,
		slug: 'String',
	},
});

export const CollectionListFilter = builder.prismaListFilter(CollectionWhere, {
	name: 'CollectionsFilter',
	ops: ['some'],
});
