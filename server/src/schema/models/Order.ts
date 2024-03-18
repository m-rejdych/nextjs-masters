import { builder } from '@/schema/builder';
import { prisma } from '@/util/prisma';

enum OrderStatus {
  CANCELLED = 'CANCELLED',
  CREATED = 'CREATED',
  FULFILLED = 'FULFILLED',
  PROCESSING_PAYMENT = 'PROCESSING_PAYMENT',
  FAILED = 'FAILED',
  PAID = 'PAID',
}

builder.enumType(OrderStatus, {
  name: 'OrderStatus',
});

const OrderItemOrderBy = builder.prismaOrderBy('OrderItem', {
  name: 'OrderItemOrderBy',
  fields: {
    createdAt: true,
    updatedAt: true,
  },
});

builder.prismaObject('Order', {
  select: {
    id: true,
    status: true,
    items: { select: { quantity: true, product: { select: { price: true } } } },
  },
  fields: (t) => ({
    id: t.exposeID('id'),
    total: t.field({
      type: 'Float',
      resolve: (order) =>
        order.items.reduce((acc, { quantity, product: { price } }) => acc + price * quantity, 0),
    }),
    status: t.field({ type: OrderStatus, resolve: (order) => order.status as OrderStatus }),
    items: t.prismaField({
      type: ['OrderItem'],
      args: {
        orderBy: t.arg({ type: OrderItemOrderBy }),
      },
      resolve: async (query, { id }, { orderBy }) => {
        return prisma.orderItem.findMany({
          ...query,
          where: { orderId: id },
          orderBy: orderBy ?? undefined,
        });
      },
    }),
    itemsCount: t.field({
      type: 'Int',
      resolve: (order) => order.items.reduce((acc, { quantity }) => acc + quantity, 0),
    }),
    createdAt: t.expose('createdAt', { type: 'Date' }),
    updatedAt: t.expose('updatedAt', { type: 'Date' }),
  }),
});

builder.queryField('orderById', (t) =>
  t.prismaField({
    type: 'Order',
    args: {
      id: t.arg({ type: 'ID', required: true }),
    },
    nullable: true,
    resolve: async (query, _, { id }) => {
      return prisma.order.findUnique({ ...query, where: { id: id as string } });
    },
  }),
);

builder.mutationField('createOrder', (t) =>
  t.prismaField({
    type: 'Order',
    resolve: async (query) => {
      return prisma.order.create({ ...query, data: {} });
    },
  }),
);

builder.mutationField('updateOrderStatus', (t) =>
  t.prismaField({
    type: 'Order',
    args: {
      id: t.arg({ type: 'ID', required: true }),
      status: t.arg({ type: OrderStatus, required: true }),
    },
    resolve: async (query, _, { id, status }) => {
      return prisma.order.update({ ...query, where: { id: id as string }, data: { status } });
    },
  }),
);
