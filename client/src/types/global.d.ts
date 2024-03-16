declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GRAPHQL_URL: string;
      STRIPE_SK: string;
      STRIPE_WEBHOOK_SECRET: string;
      NEXT_PUBLIC_STRIPE_PK: string;
    }
  }
}
