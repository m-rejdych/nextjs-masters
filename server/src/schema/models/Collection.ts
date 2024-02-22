import { builder } from '@/schema/builder';

builder.prismaObject('Collection', {
	fields: (t) => ({
		id: t.exposeID('id'),
		name: t.exposeString('name'),
		description: t.exposeString('description'),
		products: t.relation('products'),
	}),
});
