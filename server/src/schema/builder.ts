import { DateResolver } from 'graphql-scalars';
import SchemaBuilder from '@pothos/core';
import PluginPrisma from '@pothos/plugin-prisma';
import PluginRelay from '@pothos/plugin-relay';
import PluginPrismaUtils from '@pothos/plugin-prisma-utils';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import { prisma } from '@/util/prisma';

export const builder = new SchemaBuilder<{
  Scalars: {
    Date: { Input: Date; Output: Date };
  };
  PrismaTypes: PrismaTypes;
}>({
  plugins: [PluginPrisma, PluginPrismaUtils, PluginRelay],
  prisma: {
    client: prisma,
  },
  relayOptions: {},
});

builder.addScalarType('Date', DateResolver);
builder.queryType();
builder.mutationType();
