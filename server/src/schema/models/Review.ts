import { decodeGlobalID } from '@pothos/plugin-relay';
import { builder } from '@/schema/builder';
import { prisma } from '@/util/prisma';

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

builder.queryField('reviewsByProductId', (t) =>
	t.prismaField({
		type: ['Review'],
		args: {
			productId: t.arg({ type: 'ID', required: true }),
		},
		resolve: async (query, _, { productId }) => {
			return prisma.review.findMany({
        ...query,
				where: { productId: decodeGlobalID(productId as string).id },
			});
		},
	}),
);
