import path from 'path';
import { readFileSync } from 'fs';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { resolvers } from './graphql/resolvers';
import type { Context } from './graphql/context';

const typeDefs = readFileSync(path.join(__dirname, 'graphql', 'schema.graphql'), {
	encoding: 'utf-8',
});

const server = new ApolloServer<Context>({
	typeDefs,
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: parseInt(Bun.env.PORT, 10) },
	context: async (): Promise<Context> => ({}),
});

console.log(`Listening on ${url}`);
