declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GRAPHQL_URL: string;
      STRIPE_SK: string;
      NEXT_PUBLIC_STRIPE_PK: string;
    }
  }
}
