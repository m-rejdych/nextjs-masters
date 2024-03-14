import { builder } from '@/schema/builder';

builder.prismaObject('SizeOnProduct', {
  fields: (t) => ({
    inStock: t.exposeBoolean('inStock'),
    product: t.relation('product'),
    size: t.relation('size'),
  }),
});
