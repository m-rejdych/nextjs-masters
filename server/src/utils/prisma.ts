import { PrismaClient } from '@prisma/client';

export const prisma = global.prisma ?? new PrismaClient();

if (Bun.env.NODE_ENV !== 'production') {
	global.prisma = prisma;
}
