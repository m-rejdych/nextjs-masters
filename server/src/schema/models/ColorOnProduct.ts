import { builder } from '@/schema/builder';

builder.prismaObject('ColorOnProduct', {
  fields: (t) => ({
    inStock: t.exposeBoolean('inStock'),
    product: t.relation('product'),
    color: t.relation('color'),
  }),
});
