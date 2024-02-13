import type { QueryResolvers } from '../generated/graphql';
import { prisma } from '@/utils/prisma';

export const products: NonNullable<QueryResolvers['products']> = async () => {
	const products = await prisma.product.findMany();

  return products;
};
