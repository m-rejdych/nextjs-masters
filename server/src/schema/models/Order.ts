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

builder.prismaObject('Order', {
	select: { status: true, items: { select: { product: { select: { price: true } } } } },
	fields: (t) => ({
		id: t.exposeID('id'),
		total: t.field({
			type: 'Float',
			resolve: (order) => order.items.reduce((acc, { product: { price } }) => acc + price, 0),
		}),
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
