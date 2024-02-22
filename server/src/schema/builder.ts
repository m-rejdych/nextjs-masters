import SchemaBuilder from '@pothos/core';
import PluginPrisma from '@pothos/plugin-prisma';
import { DateResolver } from 'graphql-scalars';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import { prisma } from '@/utils/prisma';

export const builder = new SchemaBuilder<{
	Scalars: {
		Date: { Input: Date; Output: Date };
	};
	PrismaTypes: PrismaTypes;
}>({
	plugins: [PluginPrisma],
	prisma: {
		client: prisma,
	},
});

builder.addScalarType('Date', DateResolver);
builder.queryType();
