import { builder } from '@/schema/builder';

builder.prismaObject('CategoryImage', {
	fields: (t) => ({
		id: t.exposeID('id'),
		url: t.exposeString('url'),
		alt: t.exposeString('alt'),
	}),
});
