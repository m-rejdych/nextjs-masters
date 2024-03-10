import type { PrismaClient } from '@prisma/client';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DATABASE_URL: string;
      NODE_ENV: 'production' | 'development';
      CLIENT_URL?: string;
      VERCEL_URL?: string;
    }
  }

  // eslint-disable-next-line no-var
  var prisma: PrismaClient;
}

export {}
