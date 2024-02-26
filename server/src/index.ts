import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { schema } from '@/schema';

(async () => {
	const server = new ApolloServer({
		schema,
    introspection: true,
	});

	const { url } = await startStandaloneServer(server, {
		listen: { port: Number(process.env.PORT) },
	});

	console.log(`Listening on ${url}`);
})().catch((error) => console.log(error));
