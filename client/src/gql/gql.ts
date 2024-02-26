/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query ProductGetProduct($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    description\n    price\n    images {\n      id\n      url\n      alt\n    }\n    rating\n    reviewCount\n    colors {\n      id\n      name\n      inStock\n    }\n    sizes {\n      id\n      type\n      inStock\n    }\n    details {\n      id\n      description\n    }\n  }\n}": types.ProductGetProductDocument,
    "query ProductGetList($first: Int, $after: ID) {\n  products(first: $first, after: $after) {\n    totalCount\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n    edges {\n      node {\n        ...ProductListItem\n      }\n    }\n  }\n}": types.ProductGetListDocument,
    "query ProductGetPage($first: Int!) {\n  products(first: $first) {\n    pageInfo {\n      endCursor\n    }\n  }\n}": types.ProductGetPageDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  price\n  images {\n    id\n    url\n    alt\n  }\n}": types.ProductListItemFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetProduct($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    description\n    price\n    images {\n      id\n      url\n      alt\n    }\n    rating\n    reviewCount\n    colors {\n      id\n      name\n      inStock\n    }\n    sizes {\n      id\n      type\n      inStock\n    }\n    details {\n      id\n      description\n    }\n  }\n}"): typeof import('./graphql').ProductGetProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetList($first: Int, $after: ID) {\n  products(first: $first, after: $after) {\n    totalCount\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n    edges {\n      node {\n        ...ProductListItem\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetPage($first: Int!) {\n  products(first: $first) {\n    pageInfo {\n      endCursor\n    }\n  }\n}"): typeof import('./graphql').ProductGetPageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  price\n  images {\n    id\n    url\n    alt\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
