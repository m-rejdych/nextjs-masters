import { builder } from '@/schema/builder';
import { ProductWhereUniqueId } from '@/schema/models/Product';
import { SizeType } from '@/schema/models/Size';
import { ColorName } from '@/schema/models/Color';
import { OrderWhereUniqueId } from '@/schema/models/Order';

builder.prismaObject('OrderItem', {
	fields: (t) => ({
		id: t.exposeID('id'),
		quantity: t.exposeInt('quantity'),
		order: t.relation('order'),
		product: t.relation('product'),
    size: t.relation('size'),
    color: t.relation('color'),
	}),
});

const OrderItemConnectProduct = builder.prismaCreateRelation('OrderItem', 'product', {
  name: 'OrderItemCreateProduct',
  fields: {
    connect: ProductWhereUniqueId,
  }
})

const OrderItemConnectOrder = builder.prismaCreateRelation('OrderItem', 'order', {
  name: 'OrderItemConnectOrder',
  fields: {
    connect: OrderWhereUniqueId,
  },
});

const OrderItemCreate = builder.prismaCreate('OrderItem', {
  name: 'OrderItemCreate',
  fields: t => ({
    size: t.field({ type: SizeType }),
    color: t.field({ type: ColorName }),
    product: OrderItemConnectProduct,
    order: OrderItemConnectOrder,
  }),
});

builder.mutationField('createOrderItem', t => t.prismaField({
  type: 'OrderItem',
  args: {
    input: t.arg({ type: OrderItemCreate, required: true }),
  },
  resolve: async (query, _, { input }) => {
    return prisma.orderItem.create({ ...query, data: input });
  },
}))
