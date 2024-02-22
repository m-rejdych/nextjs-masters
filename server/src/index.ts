import path from 'path';
import { readFileSync } from 'fs';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { resolvers } from './gql/resolvers';
import type { Context } from './gql/context';

const typeDefs = readFileSync(path.join(__dirname, 'graphql', 'schema.graphql'), {
	encoding: 'utf-8',
});

const server = new ApolloServer<Context>({
	typeDefs,
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: Number(Bun.env.PORT) },
	context: async ()  => ({}),
});

console.log(`Listening on ${url}`);
