import { decodeGlobalID } from '@pothos/plugin-relay';
import { builder } from '@/schema/builder';
import { prisma } from '@/util/prisma';
import { ProductWhere } from './Product';

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
  },
});

const ReviewWhere = builder.prismaWhere('Review', {
  name: 'ReviewWhere',
  fields: {
    productId: 'String',
    author: 'String',
    email: 'String',
    title: 'String',
    description: 'String',
    rating: 'Float',
    product: ProductWhere,
  },
});

const ReviewCreateInput = builder.inputType('ReviewCreateInput', {
  fields: (t) => ({
    author: t.string({ required: true }),
    email: t.string({ required: true }),
    title: t.string({ required: true }),
    description: t.string({ required: true }),
    rating: t.int({ required: true }),
    productId: t.id({ required: true }),
  }),
});

builder.queryField('reviews', (t) =>
  t.prismaField({
    type: ['Review'],
    args: {
      where: t.arg({ type: ReviewWhere, required: true }),
      limit: t.arg({ type: 'Int' }),
      orderBy: t.arg({ type: ReviewOrderBy }),
    },
    resolve: async (query, _, { where, limit, orderBy }) => {
      return prisma.review.findMany({
        ...query,
        take: limit ?? undefined,
        orderBy: orderBy ?? undefined,
        where: {
          ...where,
          productId: where.productId ? decodeGlobalID(where.productId as string).id : undefined,
        },
      });
    },
  }),
);

builder.mutationField('createReview', (t) =>
  t.prismaField({
    type: 'Review',
    args: {
      input: t.arg({ type: ReviewCreateInput, required: true }),
    },
    resolve: async (query, _, { input: { productId, ...input } }) => {
      const decodedId = decodeGlobalID(productId as string).id;
      const product = await prisma.product.findUnique({
        where: { id: decodedId },
        select: { rating: true, reviews: { select: { rating: true } } },
      });
      if (!product) throw new Error('Product not found');

      const review = await prisma.review.create({
        ...query,
        data: { ...input, product: { connect: { id: decodedId } } },
      });

      await prisma.product.update({
        where: { id: decodedId },
        data: {
          rating:
            (product.reviews.reduce((acc, { rating }) => acc + rating, 0) + review.rating) /
            (product.reviews.length + 1),
        },
      });

      return review;
    },
  }),
);
