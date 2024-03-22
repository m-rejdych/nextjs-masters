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
    "mutation OrderCreate($userId: String) {\n  createOrder(userId: $userId) {\n    ...OrderItemsCount\n  }\n}": types.OrderCreateDocument,
    "fragment Order on Order {\n  ...OrderItemsCount\n  total\n  status\n  items(orderBy: {createdAt: Desc}) {\n    ...OrderItem\n  }\n}": types.OrderFragmentDoc,
    "query OrderGetById($id: ID!) {\n  order(id: $id) {\n    ...Order\n  }\n}": types.OrderGetByIdDocument,
    "query OrderGetItemsCountById($id: ID!) {\n  order(id: $id) {\n    ...OrderItemsCount\n  }\n}": types.OrderGetItemsCountByIdDocument,
    "query OrderGetList($where: OrderWhere, $orderBy: OrderOrderBy) {\n  orders(where: $where, orderBy: $orderBy) {\n    ...OrderListItem\n  }\n}": types.OrderGetListDocument,
    "mutation OrderItemAdd($input: OrderItemAddInput!) {\n  addOrderItem(input: $input) {\n    ...OrderItemId\n  }\n}": types.OrderItemAddDocument,
    "mutation OrderItemDecrement($id: ID!) {\n  decrementOrderItemQuantity(id: $id) {\n    ...OrderItemId\n  }\n}": types.OrderItemDecrementDocument,
    "fragment OrderItem on OrderItem {\n  id\n  total\n  quantity\n  size {\n    id\n    type\n  }\n  color {\n    id\n    name\n  }\n  product {\n    ...OrderItemProduct\n  }\n}": types.OrderItemFragmentDoc,
    "fragment OrderItemId on OrderItem {\n  id\n}": types.OrderItemIdFragmentDoc,
    "mutation OrderItemIncrement($id: ID!) {\n  incrementOrderItemQuantity(id: $id) {\n    ...OrderItemId\n  }\n}": types.OrderItemIncrementDocument,
    "fragment OrderItemProduct on Product {\n  id\n  slug\n  name\n  price\n  sizes {\n    inStock\n    size {\n      id\n    }\n  }\n  colors {\n    inStock\n    color {\n      id\n    }\n  }\n  images {\n    id\n    alt\n    url\n  }\n}": types.OrderItemProductFragmentDoc,
    "mutation OrderItemRemove($id: ID!) {\n  removeOrderItem(id: $id) {\n    ...OrderItemId\n  }\n}": types.OrderItemRemoveDocument,
    "fragment OrderItemsCount on Order {\n  id\n  itemsCount\n  status\n}": types.OrderItemsCountFragmentDoc,
    "fragment OrderListItem on Order {\n  id\n  total\n  status\n  createdAt\n  items {\n    ...OrderListItemItem\n  }\n}": types.OrderListItemFragmentDoc,
    "fragment OrderListItemItem on OrderItem {\n  ...OrderItem\n  product {\n    ...OrderListItemItemProduct\n  }\n}": types.OrderListItemItemFragmentDoc,
    "fragment OrderListItemItemProduct on Product {\n  id\n  name\n  slug\n  description\n  images {\n    id\n    url\n    alt\n  }\n}": types.OrderListItemItemProductFragmentDoc,
    "mutation OrderUpdateStatus($id: ID!, $status: OrderStatus!) {\n  updateOrderStatus(id: $id, status: $status) {\n    ...Order\n  }\n}": types.OrderUpdateStatusDocument,
    "fragment Product on Product {\n  ...ProductListItem\n  rating\n  reviewCount\n  categories {\n    id\n  }\n  collections {\n    id\n  }\n  colors {\n    inStock\n    color {\n      id\n      name\n    }\n  }\n  sizes {\n    inStock\n    size {\n      id\n      type\n    }\n  }\n  details {\n    id\n    description\n  }\n}": types.ProductFragmentDoc,
    "query ProductGetById($where: ProductWhereUnique!) {\n  product(where: $where) {\n    ...Product\n  }\n}": types.ProductGetByIdDocument,
    "query ProductGetList($first: Int, $after: ID, $where: ProductWhere, $orderBy: ProductOrderBy) {\n  products(first: $first, after: $after, where: $where, orderBy: $orderBy) {\n    totalCount\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n    edges {\n      node {\n        ...ProductListItem\n      }\n    }\n  }\n}": types.ProductGetListDocument,
    "query ProductGetPage($first: Int!, $where: ProductWhere, $orderBy: ProductOrderBy) {\n  products(first: $first, where: $where, orderBy: $orderBy) {\n    pageInfo {\n      endCursor\n    }\n  }\n}": types.ProductGetPageDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  slug\n  description\n  price\n  rating\n  reviewCount\n  categories {\n    id\n  }\n  collections {\n    id\n  }\n  images {\n    id\n    url\n    alt\n  }\n}": types.ProductListItemFragmentDoc,
    "mutation ReviewCreate($input: ReviewCreateInput!) {\n  createReview(input: $input) {\n    ...ReviewListItem\n  }\n}": types.ReviewCreateDocument,
    "query ReviewGetList($where: ReviewWhere!, $limit: Int, $orderBy: ReviewOrderBy) {\n  reviews(where: $where, limit: $limit, orderBy: $orderBy) {\n    ...ReviewListItem\n  }\n}": types.ReviewGetListDocument,
    "fragment ReviewListItem on Review {\n  id\n  email\n  title\n  description\n  author\n  rating\n  createdAt\n}": types.ReviewListItemFragmentDoc,
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
export function graphql(source: "mutation OrderCreate($userId: String) {\n  createOrder(userId: $userId) {\n    ...OrderItemsCount\n  }\n}"): typeof import('./graphql').OrderCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Order on Order {\n  ...OrderItemsCount\n  total\n  status\n  items(orderBy: {createdAt: Desc}) {\n    ...OrderItem\n  }\n}"): typeof import('./graphql').OrderFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query OrderGetById($id: ID!) {\n  order(id: $id) {\n    ...Order\n  }\n}"): typeof import('./graphql').OrderGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query OrderGetItemsCountById($id: ID!) {\n  order(id: $id) {\n    ...OrderItemsCount\n  }\n}"): typeof import('./graphql').OrderGetItemsCountByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query OrderGetList($where: OrderWhere, $orderBy: OrderOrderBy) {\n  orders(where: $where, orderBy: $orderBy) {\n    ...OrderListItem\n  }\n}"): typeof import('./graphql').OrderGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation OrderItemAdd($input: OrderItemAddInput!) {\n  addOrderItem(input: $input) {\n    ...OrderItemId\n  }\n}"): typeof import('./graphql').OrderItemAddDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation OrderItemDecrement($id: ID!) {\n  decrementOrderItemQuantity(id: $id) {\n    ...OrderItemId\n  }\n}"): typeof import('./graphql').OrderItemDecrementDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment OrderItem on OrderItem {\n  id\n  total\n  quantity\n  size {\n    id\n    type\n  }\n  color {\n    id\n    name\n  }\n  product {\n    ...OrderItemProduct\n  }\n}"): typeof import('./graphql').OrderItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment OrderItemId on OrderItem {\n  id\n}"): typeof import('./graphql').OrderItemIdFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation OrderItemIncrement($id: ID!) {\n  incrementOrderItemQuantity(id: $id) {\n    ...OrderItemId\n  }\n}"): typeof import('./graphql').OrderItemIncrementDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment OrderItemProduct on Product {\n  id\n  slug\n  name\n  price\n  sizes {\n    inStock\n    size {\n      id\n    }\n  }\n  colors {\n    inStock\n    color {\n      id\n    }\n  }\n  images {\n    id\n    alt\n    url\n  }\n}"): typeof import('./graphql').OrderItemProductFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation OrderItemRemove($id: ID!) {\n  removeOrderItem(id: $id) {\n    ...OrderItemId\n  }\n}"): typeof import('./graphql').OrderItemRemoveDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment OrderItemsCount on Order {\n  id\n  itemsCount\n  status\n}"): typeof import('./graphql').OrderItemsCountFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment OrderListItem on Order {\n  id\n  total\n  status\n  createdAt\n  items {\n    ...OrderListItemItem\n  }\n}"): typeof import('./graphql').OrderListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment OrderListItemItem on OrderItem {\n  ...OrderItem\n  product {\n    ...OrderListItemItemProduct\n  }\n}"): typeof import('./graphql').OrderListItemItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment OrderListItemItemProduct on Product {\n  id\n  name\n  slug\n  description\n  images {\n    id\n    url\n    alt\n  }\n}"): typeof import('./graphql').OrderListItemItemProductFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation OrderUpdateStatus($id: ID!, $status: OrderStatus!) {\n  updateOrderStatus(id: $id, status: $status) {\n    ...Order\n  }\n}"): typeof import('./graphql').OrderUpdateStatusDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Product on Product {\n  ...ProductListItem\n  rating\n  reviewCount\n  categories {\n    id\n  }\n  collections {\n    id\n  }\n  colors {\n    inStock\n    color {\n      id\n      name\n    }\n  }\n  sizes {\n    inStock\n    size {\n      id\n      type\n    }\n  }\n  details {\n    id\n    description\n  }\n}"): typeof import('./graphql').ProductFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($where: ProductWhereUnique!) {\n  product(where: $where) {\n    ...Product\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetList($first: Int, $after: ID, $where: ProductWhere, $orderBy: ProductOrderBy) {\n  products(first: $first, after: $after, where: $where, orderBy: $orderBy) {\n    totalCount\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n    edges {\n      node {\n        ...ProductListItem\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetPage($first: Int!, $where: ProductWhere, $orderBy: ProductOrderBy) {\n  products(first: $first, where: $where, orderBy: $orderBy) {\n    pageInfo {\n      endCursor\n    }\n  }\n}"): typeof import('./graphql').ProductGetPageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  slug\n  description\n  price\n  rating\n  reviewCount\n  categories {\n    id\n  }\n  collections {\n    id\n  }\n  images {\n    id\n    url\n    alt\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($input: ReviewCreateInput!) {\n  createReview(input: $input) {\n    ...ReviewListItem\n  }\n}"): typeof import('./graphql').ReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ReviewGetList($where: ReviewWhere!, $limit: Int, $orderBy: ReviewOrderBy) {\n  reviews(where: $where, limit: $limit, orderBy: $orderBy) {\n    ...ReviewListItem\n  }\n}"): typeof import('./graphql').ReviewGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ReviewListItem on Review {\n  id\n  email\n  title\n  description\n  author\n  rating\n  createdAt\n}"): typeof import('./graphql').ReviewListItemFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
