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
		description: t.exposeString('description'),
		products: t.relation('products'),
	}),
});
