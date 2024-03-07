import { builder } from '@/schema/builder';
import { prisma } from '@/util/prisma';

enum OrderStatus {
	CANCELLED = 'CANCELLED',
	CREATED = 'CREATED',
	FULFILLED = 'FULFILLED',
	PAID = 'PAID',
}

builder.enumType(OrderStatus, {
	name: 'OrderStatus',
});

export const OrderWhereUniqueId = builder.prismaWhereUnique('Order', {
	name: 'OrderWhereUniqueId',
	fields: { id: 'String' },
});

builder.prismaObject('Order', {
	fields: (t) => ({
		id: t.exposeID('id'),
		total: t.exposeFloat('total'),
		status: t.field({ type: OrderStatus, resolve: (order) => order.status as OrderStatus }),
		items: t.relation('items'),
		itemsCount: t.relationCount('items'),
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