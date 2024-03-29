import { decodeGlobalID } from '@pothos/plugin-relay';
import { prisma } from '@/util/prisma';
import { builder } from '@/schema/builder';

builder.prismaObject('OrderItem', {
  select: { quantity: true, product: { select: { price: true } } },
  fields: (t) => ({
    id: t.exposeID('id'),
    quantity: t.exposeInt('quantity'),
    total: t.field({
      type: 'Float',
      resolve: (orderItem) => orderItem.product.price * orderItem.quantity,
    }),
    order: t.relation('order'),
    product: t.relation('product'),
    size: t.relation('size'),
    color: t.relation('color'),
  }),
});

export const OrderItemOrderBy = builder.prismaOrderBy('OrderItem', {
  name: 'OrderItemOrderBy',
  fields: {
    createdAt: true,
    updatedAt: true,
  },
});

const OrderItemAddInput = builder.inputType('OrderItemAddInput', {
  fields: (t) => ({
    productId: t.string({ required: true }),
    orderId: t.string({ required: true }),
    sizeId: t.string({ required: true }),
    colorId: t.string({ required: true }),
  }),
});

builder.mutationField('addOrderItem', (t) =>
  t.prismaField({
    type: 'OrderItem',
    args: {
      input: t.arg({ type: OrderItemAddInput, required: true }),
    },
    resolve: async (query, _, { input: { productId, orderId, sizeId, colorId } }) => {
      const decodedProductId = decodeGlobalID(productId).id;

      const product = await prisma.product.findUnique({
        where: { id: decodedProductId },
        include: { sizes: true, colors: true },
      });
      if (!product) {
        throw new Error('Product does not exist');
      }

      const order = await prisma.order.findUnique({ where: { id: orderId } });
      if (!order) {
        throw new Error('Order does not exist');
      }

      const productSize = product.sizes.find(
        ({ sizeId: productSizeId }) => productSizeId === sizeId,
      );
      if (!productSize) {
        throw new Error('Size does not exist on product');
      }
      if (!productSize.inStock) {
        throw new Error('Size out of stock');
      }

      const productColor = product.colors.find(
        ({ colorId: productColorId }) => productColorId === colorId,
      );
      if (!productColor) {
        throw new Error('Color does not exist on product');
      }
      if (!productColor.inStock) {
        throw new Error('Color out of stock');
      }

      const orderItem = await prisma.orderItem.findFirst({
        where: {
          productId: decodedProductId,
          orderId,
          size: { id: sizeId },
          color: { id: colorId },
        },
        select: { id: true, quantity: true, product: { select: { price: true } } },
      });
      if (orderItem) {
        return prisma.orderItem.update({
          ...query,
          where: { id: orderItem.id },
          data: { quantity: orderItem.quantity + 1 },
        });
      }

      return prisma.orderItem.create({
        data: { productId: decodedProductId, orderId, sizeId, colorId },
      });
    },
  }),
);

builder.mutationField('incrementOrderItemQuantity', (t) =>
  t.prismaField({
    type: 'OrderItem',
    args: {
      id: t.arg({ type: 'ID', required: true }),
    },
    resolve: async (query, _, { id }) => {
      const orderItem = await prisma.orderItem.findUnique({ where: { id: id as string } });
      if (!orderItem) {
        throw new Error('Order item not found');
      }

      return prisma.orderItem.update({
        ...query,
        where: { id: id as string },
        data: { quantity: orderItem.quantity + 1 },
      });
    },
  }),
);

builder.mutationField('decrementOrderItemQuantity', (t) =>
  t.prismaField({
    type: 'OrderItem',
    args: {
      id: t.arg({ type: 'ID', required: true }),
    },
    resolve: async (query, _, { id }) => {
      const orderItem = await prisma.orderItem.findUnique({ where: { id: id as string } });
      if (!orderItem) {
        throw new Error('Order item not found');
      }

      if (orderItem.quantity <= 1) {
        return prisma.orderItem.delete({ ...query, where: { id: id as string } });
      }

      return prisma.orderItem.update({
        ...query,
        where: { id: id as string },
        data: { quantity: orderItem.quantity - 1 },
      });
    },
  }),
);

builder.mutationField('removeOrderItem', (t) =>
  t.prismaField({
    type: 'OrderItem',
    args: {
      id: t.arg({ type: 'ID', required: true }),
    },
    resolve: async (query, _, { id }) => {
      return prisma.orderItem.delete({ ...query, where: { id: id as string } });
    },
  }),
);
