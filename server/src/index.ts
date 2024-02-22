import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { schema } from '@/schema';

const server = new ApolloServer({
	schema,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: Number(Bun.env.PORT) },
});

console.log(`Listening on ${url}`);
