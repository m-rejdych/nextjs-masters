import { builder } from '@/schema/builder';
import { prisma } from '@/util/prisma';

enum CollectionName {
  NEW_ARRIVALS = 'NEW_ARRIVALS',
  SPORT = 'SPORT',
  BEAUTY = 'BEAUTY',
  ACCESSORIES = 'ACCESSORIES',
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
    updatedAt: t.expose('updatedAt', { type: 'Date' }),
    image: t.relation('image'),
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
    id: 'String',
    name: CollectionName,
    slug: 'String',
  },
});

export const CollectionListFilter = builder.prismaListFilter(CollectionWhere, {
  name: 'CollectionsFilter',
  ops: ['some'],
});

builder.queryField('collections', (t) =>
  t.prismaField({
    type: ['Collection'],
    args: {
      where: t.arg({ type: CollectionWhere }),
    },
    resolve: async (query, _, { where }) => {
      return prisma.collection.findMany({ ...query, where: where ?? undefined });
    },
  }),
);
