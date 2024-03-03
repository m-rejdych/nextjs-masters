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
    "query CategoryGetList {\n  categories {\n    ...CategoryListItem\n  }\n}": types.CategoryGetListDocument,
    "fragment CategoryListItem on Category {\n  id\n  name\n  slug\n  image {\n    alt\n    url\n  }\n}": types.CategoryListItemFragmentDoc,
    "query CollectionGetList {\n  collections {\n    ...CollectionListItem\n  }\n}": types.CollectionGetListDocument,
    "fragment CollectionListItem on Collection {\n  id\n  name\n  slug\n  image {\n    alt\n    url\n  }\n}": types.CollectionListItemFragmentDoc,
    "fragment Product on Product {\n  ...ProductListItem\n  rating\n  reviewCount\n  colors {\n    id\n    name\n    inStock\n  }\n  sizes {\n    id\n    type\n    inStock\n  }\n  details {\n    id\n    description\n  }\n}": types.ProductFragmentDoc,
    "query ProductGetById($id: ID!) {\n  productById(id: $id) {\n    ...Product\n  }\n}": types.ProductGetByIdDocument,
    "query ProductGetList($first: Int, $after: ID, $where: ProductsWhere) {\n  products(first: $first, after: $after, where: $where) {\n    totalCount\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n    edges {\n      node {\n        ...ProductListItem\n      }\n    }\n  }\n}": types.ProductGetListDocument,
    "query ProductGetPage($first: Int!, $where: ProductsWhere) {\n  products(first: $first, where: $where) {\n    pageInfo {\n      endCursor\n    }\n  }\n}": types.ProductGetPageDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  price\n  images {\n    id\n    url\n    alt\n  }\n}": types.ProductListItemFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetList {\n  categories {\n    ...CategoryListItem\n  }\n}"): typeof import('./graphql').CategoryGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CategoryListItem on Category {\n  id\n  name\n  slug\n  image {\n    alt\n    url\n  }\n}"): typeof import('./graphql').CategoryListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetList {\n  collections {\n    ...CollectionListItem\n  }\n}"): typeof import('./graphql').CollectionGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionListItem on Collection {\n  id\n  name\n  slug\n  image {\n    alt\n    url\n  }\n}"): typeof import('./graphql').CollectionListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Product on Product {\n  ...ProductListItem\n  rating\n  reviewCount\n  colors {\n    id\n    name\n    inStock\n  }\n  sizes {\n    id\n    type\n    inStock\n  }\n  details {\n    id\n    description\n  }\n}"): typeof import('./graphql').ProductFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  productById(id: $id) {\n    ...Product\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetList($first: Int, $after: ID, $where: ProductsWhere) {\n  products(first: $first, after: $after, where: $where) {\n    totalCount\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n    edges {\n      node {\n        ...ProductListItem\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetPage($first: Int!, $where: ProductsWhere) {\n  products(first: $first, where: $where) {\n    pageInfo {\n      endCursor\n    }\n  }\n}"): typeof import('./graphql').ProductGetPageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  price\n  images {\n    id\n    url\n    alt\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
