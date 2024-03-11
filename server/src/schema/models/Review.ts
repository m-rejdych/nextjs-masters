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
		createdAt: t.expose('createdAt', { type: 'Date' }),
		updatedAt: t.expose('updatedAt', { type: 'Date' }),
	}),
});

const ReviewOrderBy = builder.prismaOrderBy('Review', {
  name: 'ReviewOrderBy',
  fields: {
    createdAt: true,
  }
})

builder.queryField('reviewsByProductId', (t) =>
	t.prismaField({
		type: ['Review'],
		args: {
			productId: t.arg({ type: 'ID', required: true }),
			limit: t.arg({ type: 'Int' }),
      orderBy: t.arg({ type: ReviewOrderBy }),
		},
		resolve: async (query, _, { productId, limit, orderBy }) => {
			return prisma.review.findMany({
				...query,
				take: limit ?? undefined,
        orderBy: orderBy ?? undefined,
				where: { productId: decodeGlobalID(productId as string).id },
			});
		},
	}),
);
