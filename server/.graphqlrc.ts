import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/graphql/schema.graphql",
  generates: {
    "src/gql/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"]
    }
  },
  config: {
    contextType: '@/gql/context#Context',
    useTypeImports: true,
    defaultScalarType: "unknown",
    skipTypename: true,
    enumsAsTypes: true,
    documentMode: "string"
  }
};

export default config;
