import { builder } from '@/schema/builder';

builder.prismaObject('Review', {
	fields: (t) => ({
		id: t.exposeID('id'),
		author: t.exposeString('author'),
		email: t.exposeString('email'),
		title: t.exposeString('title'),
		description: t.exposeString('description'),
		rating: t.exposeFloat('rating'),
		product: t.relation('product'),
	}),
});
