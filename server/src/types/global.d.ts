import type { PrismaClient } from '@prisma/client';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DATABASE_URL: string;
      NODE_ENV: 'production' | 'development';
    }
  }

  // eslint-disable-next-line no-var
  var prisma: PrismaClient;
}

export {}
