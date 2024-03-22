/* eslint-disable import/no-named-as-default-member */
import http from 'http';
import path from 'path';
import cors from 'cors';
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from '@apollo/server/express4';
import { genericErrorHandler } from '@/util/error';
import { schema } from '@/schema';

(async () => {
  const app = express();

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    schema,
    introspection: true,
    plugins: [
      ApolloServerPluginLandingPageLocalDefault(),
      ApolloServerPluginDrainHttpServer({ httpServer }),
    ],
  });

  await server.start();

  app.use(cors());
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: false, limit: '50mb' }));

  app.use('/static', express.static(path.join(process.cwd(), 'public')));
  app.use('/graphql', expressMiddleware(server));
  app.use(genericErrorHandler);

  const port = process.env.PORT || 4000;

  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  console.log(`Listening on http://localhost:${port}`);
})().catch((error) => console.log(error));
