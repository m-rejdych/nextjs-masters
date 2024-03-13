import { builder } from '@/schema/builder';

builder.prismaObject('Detail', {
  fields: (t) => ({
    id: t.exposeID('id'),
    description: t.exposeString('description'),
    product: t.relation('product'),
  }),
});
