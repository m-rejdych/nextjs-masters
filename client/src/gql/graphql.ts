/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: string; output: string; }
};

export type CategoriesFilter = {
  some?: InputMaybe<CategoryWhere>;
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: CategoryImage;
  name: CategoryName;
  products: CategoryProductsConnection;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};


export type CategoryProductsArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CategoryImage = {
  __typename?: 'CategoryImage';
  alt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
};

export type CategoryName =
  | 'ACCESSORIES'
  | 'CLOTHING'
  | 'COSMETICS'
  | 'JEWELRY';

export type CategoryProductsConnection = {
  __typename?: 'CategoryProductsConnection';
  edges: Array<CategoryProductsConnectionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CategoryProductsConnectionEdge = {
  __typename?: 'CategoryProductsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Product;
};

export type CategoryWhere = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<CategoryName>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Collection = {
  __typename?: 'Collection';
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: CollectionImage;
  name: CollectionName;
  products: CollectionProductsConnection;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};


export type CollectionProductsArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CollectionImage = {
  __typename?: 'CollectionImage';
  alt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
};

export type CollectionName =
  | 'BEST_SELLERS'
  | 'NEW_ARRIVALS'
  | 'SUMMER'
  | 'WINTER';

export type CollectionProductsConnection = {
  __typename?: 'CollectionProductsConnection';
  edges: Array<CollectionProductsConnectionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CollectionProductsConnectionEdge = {
  __typename?: 'CollectionProductsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Product;
};

export type CollectionWhere = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<CollectionName>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionsFilter = {
  some?: InputMaybe<CollectionWhere>;
};

export type Color = {
  __typename?: 'Color';
  id: Scalars['ID']['output'];
  name: ColorName;
};

export type ColorName =
  | 'BLACK'
  | 'GRAY';

export type ColorOnProduct = {
  __typename?: 'ColorOnProduct';
  color: Color;
  inStock: Scalars['Boolean']['output'];
  product: Product;
};

export type Detail = {
  __typename?: 'Detail';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  product: Product;
};

export type Mutation = {
  __typename?: 'Mutation';
  addOrderItem: OrderItem;
  createOrder: Order;
  createReview: Review;
  decrementOrderItemQuantity: OrderItem;
  incrementOrderItemQuantity: OrderItem;
  removeOrderItem: OrderItem;
  updateOrderStatus: Order;
};


export type MutationAddOrderItemArgs = {
  input: OrderItemAddInput;
};


export type MutationCreateOrderArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateReviewArgs = {
  input: ReviewCreateInput;
};


export type MutationDecrementOrderItemQuantityArgs = {
  id: Scalars['ID']['input'];
};


export type MutationIncrementOrderItemQuantityArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveOrderItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateOrderStatusArgs = {
  id: Scalars['ID']['input'];
  status: OrderStatus;
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  items: Array<OrderItem>;
  itemsCount: Scalars['Int']['output'];
  status: OrderStatus;
  total: Scalars['Float']['output'];
  updatedAt: Scalars['Date']['output'];
};


export type OrderItemsArgs = {
  orderBy?: InputMaybe<OrderItemOrderBy>;
};

export type OrderBy =
  | 'Asc'
  | 'Desc';

export type OrderItem = {
  __typename?: 'OrderItem';
  color: Color;
  id: Scalars['ID']['output'];
  order: Order;
  product: Product;
  quantity: Scalars['Int']['output'];
  size: Size;
  total: Scalars['Float']['output'];
};

export type OrderItemAddInput = {
  colorId: Scalars['String']['input'];
  orderId: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  sizeId: Scalars['String']['input'];
};

export type OrderItemOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

export type OrderOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

export type OrderStatus =
  | 'CANCELLED'
  | 'CREATED'
  | 'FAILED'
  | 'FULFILLED'
  | 'PAID'
  | 'PROCESSING_PAYMENT';

export type OrderWhere = {
  NOT?: InputMaybe<OrderWhereNot>;
  status?: InputMaybe<OrderStatus>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type OrderWhereNot = {
  status?: InputMaybe<OrderStatus>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Product = Node & {
  __typename?: 'Product';
  categories: Array<Category>;
  collections: Array<Collection>;
  colors: Array<ColorOnProduct>;
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  details: Array<Detail>;
  id: Scalars['ID']['output'];
  images: Array<ProductImage>;
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  rating: Scalars['Float']['output'];
  reviewCount: Scalars['Int']['output'];
  reviews: Array<Review>;
  sizes: Array<SizeOnProduct>;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type ProductImage = {
  __typename?: 'ProductImage';
  alt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
};

export type ProductOrderBy = {
  price?: InputMaybe<OrderBy>;
  rating?: InputMaybe<OrderBy>;
};

export type ProductWhere = {
  AND?: InputMaybe<Array<ProductWhereAnd>>;
  NOT?: InputMaybe<ProductWhereNot>;
  categories?: InputMaybe<CategoriesFilter>;
  collections?: InputMaybe<CollectionsFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ProductWhereAnd = {
  NOT?: InputMaybe<ProductWhereNot>;
  categories?: InputMaybe<CategoriesFilter>;
  collections?: InputMaybe<CollectionsFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ProductWhereNot = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type ProductWhereUnique = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  collections: Array<Collection>;
  node?: Maybe<Node>;
  nodes: Array<Maybe<Node>>;
  order?: Maybe<Order>;
  orders: Array<Order>;
  product?: Maybe<Product>;
  products: QueryProductsConnection;
  reviews: Array<Review>;
};


export type QueryCategoriesArgs = {
  where?: InputMaybe<CategoryWhere>;
};


export type QueryCollectionsArgs = {
  where?: InputMaybe<CollectionWhere>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrdersArgs = {
  orderBy?: InputMaybe<OrderOrderBy>;
  where?: InputMaybe<OrderWhere>;
};


export type QueryProductArgs = {
  where: ProductWhereUnique;
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProductOrderBy>;
  where?: InputMaybe<ProductWhere>;
};


export type QueryReviewsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReviewOrderBy>;
  where: ReviewWhere;
};

export type QueryProductsConnection = {
  __typename?: 'QueryProductsConnection';
  edges: Array<QueryProductsConnectionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type QueryProductsConnectionEdge = {
  __typename?: 'QueryProductsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Product;
};

export type Review = {
  __typename?: 'Review';
  author: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  product: Product;
  rating: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type ReviewCreateInput = {
  author: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type ReviewOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
};

export type ReviewWhere = {
  author?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Size = {
  __typename?: 'Size';
  id: Scalars['ID']['output'];
  type: SizeType;
};

export type SizeOnProduct = {
  __typename?: 'SizeOnProduct';
  inStock: Scalars['Boolean']['output'];
  product: Product;
  size: Size;
};

export type SizeType =
  | 'L'
  | 'M'
  | 'S'
  | 'XL';

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<StringFilterMode>;
};

export type StringFilterMode =
  | 'Default'
  | 'Insensitive';

export type CategoryGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoryGetListQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, name: CategoryName, slug: string, image: { __typename?: 'CategoryImage', alt: string, url: string } }> };

export type CategoryListItemFragment = { __typename?: 'Category', id: string, name: CategoryName, slug: string, image: { __typename?: 'CategoryImage', alt: string, url: string } };

export type CollectionGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionGetListQuery = { __typename?: 'Query', collections: Array<{ __typename?: 'Collection', id: string, name: CollectionName, slug: string, image: { __typename?: 'CollectionImage', alt: string, url: string } }> };

export type CollectionListItemFragment = { __typename?: 'Collection', id: string, name: CollectionName, slug: string, image: { __typename?: 'CollectionImage', alt: string, url: string } };

export type OrderCreateMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type OrderCreateMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'Order', id: string, itemsCount: number, status: OrderStatus } };

export type OrderFragment = { __typename?: 'Order', total: number, status: OrderStatus, id: string, itemsCount: number, items: Array<{ __typename?: 'OrderItem', id: string, total: number, quantity: number, size: { __typename?: 'Size', id: string, type: SizeType }, color: { __typename?: 'Color', id: string, name: ColorName }, product: { __typename?: 'Product', id: string, slug: string, name: string, price: number, sizes: Array<{ __typename?: 'SizeOnProduct', inStock: boolean, size: { __typename?: 'Size', id: string } }>, colors: Array<{ __typename?: 'ColorOnProduct', inStock: boolean, color: { __typename?: 'Color', id: string } }>, images: Array<{ __typename?: 'ProductImage', id: string, alt: string, url: string }> } }> };

export type OrderGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type OrderGetByIdQuery = { __typename?: 'Query', order?: { __typename?: 'Order', total: number, status: OrderStatus, id: string, itemsCount: number, items: Array<{ __typename?: 'OrderItem', id: string, total: number, quantity: number, size: { __typename?: 'Size', id: string, type: SizeType }, color: { __typename?: 'Color', id: string, name: ColorName }, product: { __typename?: 'Product', id: string, slug: string, name: string, price: number, sizes: Array<{ __typename?: 'SizeOnProduct', inStock: boolean, size: { __typename?: 'Size', id: string } }>, colors: Array<{ __typename?: 'ColorOnProduct', inStock: boolean, color: { __typename?: 'Color', id: string } }>, images: Array<{ __typename?: 'ProductImage', id: string, alt: string, url: string }> } }> } | null };

export type OrderGetItemsCountByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type OrderGetItemsCountByIdQuery = { __typename?: 'Query', order?: { __typename?: 'Order', id: string, itemsCount: number, status: OrderStatus } | null };

export type OrderGetListQueryVariables = Exact<{
  where?: InputMaybe<OrderWhere>;
  orderBy?: InputMaybe<OrderOrderBy>;
}>;


export type OrderGetListQuery = { __typename?: 'Query', orders: Array<{ __typename?: 'Order', id: string, total: number, status: OrderStatus, createdAt: string, items: Array<{ __typename?: 'OrderItem', id: string, total: number, quantity: number, product: { __typename?: 'Product', id: string, name: string, slug: string, description: string, price: number, images: Array<{ __typename?: 'ProductImage', id: string, url: string, alt: string }>, sizes: Array<{ __typename?: 'SizeOnProduct', inStock: boolean, size: { __typename?: 'Size', id: string } }>, colors: Array<{ __typename?: 'ColorOnProduct', inStock: boolean, color: { __typename?: 'Color', id: string } }> }, size: { __typename?: 'Size', id: string, type: SizeType }, color: { __typename?: 'Color', id: string, name: ColorName } }> }> };

export type OrderItemAddMutationVariables = Exact<{
  input: OrderItemAddInput;
}>;


export type OrderItemAddMutation = { __typename?: 'Mutation', addOrderItem: { __typename?: 'OrderItem', id: string } };

export type OrderItemDecrementMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type OrderItemDecrementMutation = { __typename?: 'Mutation', decrementOrderItemQuantity: { __typename?: 'OrderItem', id: string } };

export type OrderItemFragment = { __typename?: 'OrderItem', id: string, total: number, quantity: number, size: { __typename?: 'Size', id: string, type: SizeType }, color: { __typename?: 'Color', id: string, name: ColorName }, product: { __typename?: 'Product', id: string, slug: string, name: string, price: number, sizes: Array<{ __typename?: 'SizeOnProduct', inStock: boolean, size: { __typename?: 'Size', id: string } }>, colors: Array<{ __typename?: 'ColorOnProduct', inStock: boolean, color: { __typename?: 'Color', id: string } }>, images: Array<{ __typename?: 'ProductImage', id: string, alt: string, url: string }> } };

export type OrderItemIdFragment = { __typename?: 'OrderItem', id: string };

export type OrderItemIncrementMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type OrderItemIncrementMutation = { __typename?: 'Mutation', incrementOrderItemQuantity: { __typename?: 'OrderItem', id: string } };

export type OrderItemProductFragment = { __typename?: 'Product', id: string, slug: string, name: string, price: number, sizes: Array<{ __typename?: 'SizeOnProduct', inStock: boolean, size: { __typename?: 'Size', id: string } }>, colors: Array<{ __typename?: 'ColorOnProduct', inStock: boolean, color: { __typename?: 'Color', id: string } }>, images: Array<{ __typename?: 'ProductImage', id: string, alt: string, url: string }> };

export type OrderItemRemoveMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type OrderItemRemoveMutation = { __typename?: 'Mutation', removeOrderItem: { __typename?: 'OrderItem', id: string } };

export type OrderItemsCountFragment = { __typename?: 'Order', id: string, itemsCount: number, status: OrderStatus };

export type OrderListItemFragment = { __typename?: 'Order', id: string, total: number, status: OrderStatus, createdAt: string, items: Array<{ __typename?: 'OrderItem', id: string, total: number, quantity: number, product: { __typename?: 'Product', id: string, name: string, slug: string, description: string, price: number, images: Array<{ __typename?: 'ProductImage', id: string, url: string, alt: string }>, sizes: Array<{ __typename?: 'SizeOnProduct', inStock: boolean, size: { __typename?: 'Size', id: string } }>, colors: Array<{ __typename?: 'ColorOnProduct', inStock: boolean, color: { __typename?: 'Color', id: string } }> }, size: { __typename?: 'Size', id: string, type: SizeType }, color: { __typename?: 'Color', id: string, name: ColorName } }> };

export type OrderListItemItemFragment = { __typename?: 'OrderItem', id: string, total: number, quantity: number, product: { __typename?: 'Product', id: string, name: string, slug: string, description: string, price: number, images: Array<{ __typename?: 'ProductImage', id: string, url: string, alt: string }>, sizes: Array<{ __typename?: 'SizeOnProduct', inStock: boolean, size: { __typename?: 'Size', id: string } }>, colors: Array<{ __typename?: 'ColorOnProduct', inStock: boolean, color: { __typename?: 'Color', id: string } }> }, size: { __typename?: 'Size', id: string, type: SizeType }, color: { __typename?: 'Color', id: string, name: ColorName } };

export type OrderListItemItemProductFragment = { __typename?: 'Product', id: string, name: string, slug: string, description: string, images: Array<{ __typename?: 'ProductImage', id: string, url: string, alt: string }> };

export type OrderUpdateStatusMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  status: OrderStatus;
}>;


export type OrderUpdateStatusMutation = { __typename?: 'Mutation', updateOrderStatus: { __typename?: 'Order', total: number, status: OrderStatus, id: string, itemsCount: number, items: Array<{ __typename?: 'OrderItem', id: string, total: number, quantity: number, size: { __typename?: 'Size', id: string, type: SizeType }, color: { __typename?: 'Color', id: string, name: ColorName }, product: { __typename?: 'Product', id: string, slug: string, name: string, price: number, sizes: Array<{ __typename?: 'SizeOnProduct', inStock: boolean, size: { __typename?: 'Size', id: string } }>, colors: Array<{ __typename?: 'ColorOnProduct', inStock: boolean, color: { __typename?: 'Color', id: string } }>, images: Array<{ __typename?: 'ProductImage', id: string, alt: string, url: string }> } }> } };

export type ProductFragment = { __typename?: 'Product', rating: number, reviewCount: number, id: string, name: string, slug: string, description: string, price: number, categories: Array<{ __typename?: 'Category', id: string }>, collections: Array<{ __typename?: 'Collection', id: string }>, colors: Array<{ __typename?: 'ColorOnProduct', inStock: boolean, color: { __typename?: 'Color', id: string, name: ColorName } }>, sizes: Array<{ __typename?: 'SizeOnProduct', inStock: boolean, size: { __typename?: 'Size', id: string, type: SizeType } }>, details: Array<{ __typename?: 'Detail', id: string, description: string }>, images: Array<{ __typename?: 'ProductImage', id: string, url: string, alt: string }> };

export type ProductGetByIdQueryVariables = Exact<{
  where: ProductWhereUnique;
}>;


export type ProductGetByIdQuery = { __typename?: 'Query', product?: { __typename?: 'Product', rating: number, reviewCount: number, id: string, name: string, slug: string, description: string, price: number, categories: Array<{ __typename?: 'Category', id: string }>, collections: Array<{ __typename?: 'Collection', id: string }>, colors: Array<{ __typename?: 'ColorOnProduct', inStock: boolean, color: { __typename?: 'Color', id: string, name: ColorName } }>, sizes: Array<{ __typename?: 'SizeOnProduct', inStock: boolean, size: { __typename?: 'Size', id: string, type: SizeType } }>, details: Array<{ __typename?: 'Detail', id: string, description: string }>, images: Array<{ __typename?: 'ProductImage', id: string, url: string, alt: string }> } | null };

export type ProductGetListQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ID']['input']>;
  where?: InputMaybe<ProductWhere>;
  orderBy?: InputMaybe<ProductOrderBy>;
}>;


export type ProductGetListQuery = { __typename?: 'Query', products: { __typename?: 'QueryProductsConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean }, edges: Array<{ __typename?: 'QueryProductsConnectionEdge', node: { __typename?: 'Product', id: string, name: string, slug: string, description: string, price: number, rating: number, reviewCount: number, categories: Array<{ __typename?: 'Category', id: string }>, collections: Array<{ __typename?: 'Collection', id: string }>, images: Array<{ __typename?: 'ProductImage', id: string, url: string, alt: string }> } }> } };

export type ProductGetPageQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  where?: InputMaybe<ProductWhere>;
  orderBy?: InputMaybe<ProductOrderBy>;
}>;


export type ProductGetPageQuery = { __typename?: 'Query', products: { __typename?: 'QueryProductsConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null } } };

export type ProductListItemFragment = { __typename?: 'Product', id: string, name: string, slug: string, description: string, price: number, rating: number, reviewCount: number, categories: Array<{ __typename?: 'Category', id: string }>, collections: Array<{ __typename?: 'Collection', id: string }>, images: Array<{ __typename?: 'ProductImage', id: string, url: string, alt: string }> };

export type ReviewCreateMutationVariables = Exact<{
  input: ReviewCreateInput;
}>;


export type ReviewCreateMutation = { __typename?: 'Mutation', createReview: { __typename?: 'Review', id: string, email: string, title: string, description: string, author: string, rating: number, createdAt: string } };

export type ReviewGetListQueryVariables = Exact<{
  where: ReviewWhere;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReviewOrderBy>;
}>;


export type ReviewGetListQuery = { __typename?: 'Query', reviews: Array<{ __typename?: 'Review', id: string, email: string, title: string, description: string, author: string, rating: number, createdAt: string }> };

export type ReviewListItemFragment = { __typename?: 'Review', id: string, email: string, title: string, description: string, author: string, rating: number, createdAt: string };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const CategoryListItemFragmentDoc = new TypedDocumentString(`
    fragment CategoryListItem on Category {
  id
  name
  slug
  image {
    alt
    url
  }
}
    `, {"fragmentName":"CategoryListItem"}) as unknown as TypedDocumentString<CategoryListItemFragment, unknown>;
export const CollectionListItemFragmentDoc = new TypedDocumentString(`
    fragment CollectionListItem on Collection {
  id
  name
  slug
  image {
    alt
    url
  }
}
    `, {"fragmentName":"CollectionListItem"}) as unknown as TypedDocumentString<CollectionListItemFragment, unknown>;
export const OrderItemsCountFragmentDoc = new TypedDocumentString(`
    fragment OrderItemsCount on Order {
  id
  itemsCount
  status
}
    `, {"fragmentName":"OrderItemsCount"}) as unknown as TypedDocumentString<OrderItemsCountFragment, unknown>;
export const OrderItemProductFragmentDoc = new TypedDocumentString(`
    fragment OrderItemProduct on Product {
  id
  slug
  name
  price
  sizes {
    inStock
    size {
      id
    }
  }
  colors {
    inStock
    color {
      id
    }
  }
  images {
    id
    alt
    url
  }
}
    `, {"fragmentName":"OrderItemProduct"}) as unknown as TypedDocumentString<OrderItemProductFragment, unknown>;
export const OrderItemFragmentDoc = new TypedDocumentString(`
    fragment OrderItem on OrderItem {
  id
  total
  quantity
  size {
    id
    type
  }
  color {
    id
    name
  }
  product {
    ...OrderItemProduct
  }
}
    fragment OrderItemProduct on Product {
  id
  slug
  name
  price
  sizes {
    inStock
    size {
      id
    }
  }
  colors {
    inStock
    color {
      id
    }
  }
  images {
    id
    alt
    url
  }
}`, {"fragmentName":"OrderItem"}) as unknown as TypedDocumentString<OrderItemFragment, unknown>;
export const OrderFragmentDoc = new TypedDocumentString(`
    fragment Order on Order {
  ...OrderItemsCount
  total
  status
  items(orderBy: {createdAt: Desc}) {
    ...OrderItem
  }
}
    fragment OrderItem on OrderItem {
  id
  total
  quantity
  size {
    id
    type
  }
  color {
    id
    name
  }
  product {
    ...OrderItemProduct
  }
}
fragment OrderItemProduct on Product {
  id
  slug
  name
  price
  sizes {
    inStock
    size {
      id
    }
  }
  colors {
    inStock
    color {
      id
    }
  }
  images {
    id
    alt
    url
  }
}
fragment OrderItemsCount on Order {
  id
  itemsCount
  status
}`, {"fragmentName":"Order"}) as unknown as TypedDocumentString<OrderFragment, unknown>;
export const OrderItemIdFragmentDoc = new TypedDocumentString(`
    fragment OrderItemId on OrderItem {
  id
}
    `, {"fragmentName":"OrderItemId"}) as unknown as TypedDocumentString<OrderItemIdFragment, unknown>;
export const OrderListItemItemProductFragmentDoc = new TypedDocumentString(`
    fragment OrderListItemItemProduct on Product {
  id
  name
  slug
  description
  images {
    id
    url
    alt
  }
}
    `, {"fragmentName":"OrderListItemItemProduct"}) as unknown as TypedDocumentString<OrderListItemItemProductFragment, unknown>;
export const OrderListItemItemFragmentDoc = new TypedDocumentString(`
    fragment OrderListItemItem on OrderItem {
  ...OrderItem
  product {
    ...OrderListItemItemProduct
  }
}
    fragment OrderItem on OrderItem {
  id
  total
  quantity
  size {
    id
    type
  }
  color {
    id
    name
  }
  product {
    ...OrderItemProduct
  }
}
fragment OrderItemProduct on Product {
  id
  slug
  name
  price
  sizes {
    inStock
    size {
      id
    }
  }
  colors {
    inStock
    color {
      id
    }
  }
  images {
    id
    alt
    url
  }
}
fragment OrderListItemItemProduct on Product {
  id
  name
  slug
  description
  images {
    id
    url
    alt
  }
}`, {"fragmentName":"OrderListItemItem"}) as unknown as TypedDocumentString<OrderListItemItemFragment, unknown>;
export const OrderListItemFragmentDoc = new TypedDocumentString(`
    fragment OrderListItem on Order {
  id
  total
  status
  createdAt
  items {
    ...OrderListItemItem
  }
}
    fragment OrderItem on OrderItem {
  id
  total
  quantity
  size {
    id
    type
  }
  color {
    id
    name
  }
  product {
    ...OrderItemProduct
  }
}
fragment OrderItemProduct on Product {
  id
  slug
  name
  price
  sizes {
    inStock
    size {
      id
    }
  }
  colors {
    inStock
    color {
      id
    }
  }
  images {
    id
    alt
    url
  }
}
fragment OrderListItemItem on OrderItem {
  ...OrderItem
  product {
    ...OrderListItemItemProduct
  }
}
fragment OrderListItemItemProduct on Product {
  id
  name
  slug
  description
  images {
    id
    url
    alt
  }
}`, {"fragmentName":"OrderListItem"}) as unknown as TypedDocumentString<OrderListItemFragment, unknown>;
export const ProductListItemFragmentDoc = new TypedDocumentString(`
    fragment ProductListItem on Product {
  id
  name
  slug
  description
  price
  rating
  reviewCount
  categories {
    id
  }
  collections {
    id
  }
  images {
    id
    url
    alt
  }
}
    `, {"fragmentName":"ProductListItem"}) as unknown as TypedDocumentString<ProductListItemFragment, unknown>;
export const ProductFragmentDoc = new TypedDocumentString(`
    fragment Product on Product {
  ...ProductListItem
  rating
  reviewCount
  categories {
    id
  }
  collections {
    id
  }
  colors {
    inStock
    color {
      id
      name
    }
  }
  sizes {
    inStock
    size {
      id
      type
    }
  }
  details {
    id
    description
  }
}
    fragment ProductListItem on Product {
  id
  name
  slug
  description
  price
  rating
  reviewCount
  categories {
    id
  }
  collections {
    id
  }
  images {
    id
    url
    alt
  }
}`, {"fragmentName":"Product"}) as unknown as TypedDocumentString<ProductFragment, unknown>;
export const ReviewListItemFragmentDoc = new TypedDocumentString(`
    fragment ReviewListItem on Review {
  id
  email
  title
  description
  author
  rating
  createdAt
}
    `, {"fragmentName":"ReviewListItem"}) as unknown as TypedDocumentString<ReviewListItemFragment, unknown>;
export const CategoryGetListDocument = new TypedDocumentString(`
    query CategoryGetList {
  categories {
    ...CategoryListItem
  }
}
    fragment CategoryListItem on Category {
  id
  name
  slug
  image {
    alt
    url
  }
}`) as unknown as TypedDocumentString<CategoryGetListQuery, CategoryGetListQueryVariables>;
export const CollectionGetListDocument = new TypedDocumentString(`
    query CollectionGetList {
  collections {
    ...CollectionListItem
  }
}
    fragment CollectionListItem on Collection {
  id
  name
  slug
  image {
    alt
    url
  }
}`) as unknown as TypedDocumentString<CollectionGetListQuery, CollectionGetListQueryVariables>;
export const OrderCreateDocument = new TypedDocumentString(`
    mutation OrderCreate($userId: String) {
  createOrder(userId: $userId) {
    ...OrderItemsCount
  }
}
    fragment OrderItemsCount on Order {
  id
  itemsCount
  status
}`) as unknown as TypedDocumentString<OrderCreateMutation, OrderCreateMutationVariables>;
export const OrderGetByIdDocument = new TypedDocumentString(`
    query OrderGetById($id: ID!) {
  order(id: $id) {
    ...Order
  }
}
    fragment Order on Order {
  ...OrderItemsCount
  total
  status
  items(orderBy: {createdAt: Desc}) {
    ...OrderItem
  }
}
fragment OrderItem on OrderItem {
  id
  total
  quantity
  size {
    id
    type
  }
  color {
    id
    name
  }
  product {
    ...OrderItemProduct
  }
}
fragment OrderItemProduct on Product {
  id
  slug
  name
  price
  sizes {
    inStock
    size {
      id
    }
  }
  colors {
    inStock
    color {
      id
    }
  }
  images {
    id
    alt
    url
  }
}
fragment OrderItemsCount on Order {
  id
  itemsCount
  status
}`) as unknown as TypedDocumentString<OrderGetByIdQuery, OrderGetByIdQueryVariables>;
export const OrderGetItemsCountByIdDocument = new TypedDocumentString(`
    query OrderGetItemsCountById($id: ID!) {
  order(id: $id) {
    ...OrderItemsCount
  }
}
    fragment OrderItemsCount on Order {
  id
  itemsCount
  status
}`) as unknown as TypedDocumentString<OrderGetItemsCountByIdQuery, OrderGetItemsCountByIdQueryVariables>;
export const OrderGetListDocument = new TypedDocumentString(`
    query OrderGetList($where: OrderWhere, $orderBy: OrderOrderBy) {
  orders(where: $where, orderBy: $orderBy) {
    ...OrderListItem
  }
}
    fragment OrderItem on OrderItem {
  id
  total
  quantity
  size {
    id
    type
  }
  color {
    id
    name
  }
  product {
    ...OrderItemProduct
  }
}
fragment OrderItemProduct on Product {
  id
  slug
  name
  price
  sizes {
    inStock
    size {
      id
    }
  }
  colors {
    inStock
    color {
      id
    }
  }
  images {
    id
    alt
    url
  }
}
fragment OrderListItem on Order {
  id
  total
  status
  createdAt
  items {
    ...OrderListItemItem
  }
}
fragment OrderListItemItem on OrderItem {
  ...OrderItem
  product {
    ...OrderListItemItemProduct
  }
}
fragment OrderListItemItemProduct on Product {
  id
  name
  slug
  description
  images {
    id
    url
    alt
  }
}`) as unknown as TypedDocumentString<OrderGetListQuery, OrderGetListQueryVariables>;
export const OrderItemAddDocument = new TypedDocumentString(`
    mutation OrderItemAdd($input: OrderItemAddInput!) {
  addOrderItem(input: $input) {
    ...OrderItemId
  }
}
    fragment OrderItemId on OrderItem {
  id
}`) as unknown as TypedDocumentString<OrderItemAddMutation, OrderItemAddMutationVariables>;
export const OrderItemDecrementDocument = new TypedDocumentString(`
    mutation OrderItemDecrement($id: ID!) {
  decrementOrderItemQuantity(id: $id) {
    ...OrderItemId
  }
}
    fragment OrderItemId on OrderItem {
  id
}`) as unknown as TypedDocumentString<OrderItemDecrementMutation, OrderItemDecrementMutationVariables>;
export const OrderItemIncrementDocument = new TypedDocumentString(`
    mutation OrderItemIncrement($id: ID!) {
  incrementOrderItemQuantity(id: $id) {
    ...OrderItemId
  }
}
    fragment OrderItemId on OrderItem {
  id
}`) as unknown as TypedDocumentString<OrderItemIncrementMutation, OrderItemIncrementMutationVariables>;
export const OrderItemRemoveDocument = new TypedDocumentString(`
    mutation OrderItemRemove($id: ID!) {
  removeOrderItem(id: $id) {
    ...OrderItemId
  }
}
    fragment OrderItemId on OrderItem {
  id
}`) as unknown as TypedDocumentString<OrderItemRemoveMutation, OrderItemRemoveMutationVariables>;
export const OrderUpdateStatusDocument = new TypedDocumentString(`
    mutation OrderUpdateStatus($id: ID!, $status: OrderStatus!) {
  updateOrderStatus(id: $id, status: $status) {
    ...Order
  }
}
    fragment Order on Order {
  ...OrderItemsCount
  total
  status
  items(orderBy: {createdAt: Desc}) {
    ...OrderItem
  }
}
fragment OrderItem on OrderItem {
  id
  total
  quantity
  size {
    id
    type
  }
  color {
    id
    name
  }
  product {
    ...OrderItemProduct
  }
}
fragment OrderItemProduct on Product {
  id
  slug
  name
  price
  sizes {
    inStock
    size {
      id
    }
  }
  colors {
    inStock
    color {
      id
    }
  }
  images {
    id
    alt
    url
  }
}
fragment OrderItemsCount on Order {
  id
  itemsCount
  status
}`) as unknown as TypedDocumentString<OrderUpdateStatusMutation, OrderUpdateStatusMutationVariables>;
export const ProductGetByIdDocument = new TypedDocumentString(`
    query ProductGetById($where: ProductWhereUnique!) {
  product(where: $where) {
    ...Product
  }
}
    fragment Product on Product {
  ...ProductListItem
  rating
  reviewCount
  categories {
    id
  }
  collections {
    id
  }
  colors {
    inStock
    color {
      id
      name
    }
  }
  sizes {
    inStock
    size {
      id
      type
    }
  }
  details {
    id
    description
  }
}
fragment ProductListItem on Product {
  id
  name
  slug
  description
  price
  rating
  reviewCount
  categories {
    id
  }
  collections {
    id
  }
  images {
    id
    url
    alt
  }
}`) as unknown as TypedDocumentString<ProductGetByIdQuery, ProductGetByIdQueryVariables>;
export const ProductGetListDocument = new TypedDocumentString(`
    query ProductGetList($first: Int, $after: ID, $where: ProductWhere, $orderBy: ProductOrderBy) {
  products(first: $first, after: $after, where: $where, orderBy: $orderBy) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    edges {
      node {
        ...ProductListItem
      }
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  slug
  description
  price
  rating
  reviewCount
  categories {
    id
  }
  collections {
    id
  }
  images {
    id
    url
    alt
  }
}`) as unknown as TypedDocumentString<ProductGetListQuery, ProductGetListQueryVariables>;
export const ProductGetPageDocument = new TypedDocumentString(`
    query ProductGetPage($first: Int!, $where: ProductWhere, $orderBy: ProductOrderBy) {
  products(first: $first, where: $where, orderBy: $orderBy) {
    pageInfo {
      endCursor
    }
  }
}
    `) as unknown as TypedDocumentString<ProductGetPageQuery, ProductGetPageQueryVariables>;
export const ReviewCreateDocument = new TypedDocumentString(`
    mutation ReviewCreate($input: ReviewCreateInput!) {
  createReview(input: $input) {
    ...ReviewListItem
  }
}
    fragment ReviewListItem on Review {
  id
  email
  title
  description
  author
  rating
  createdAt
}`) as unknown as TypedDocumentString<ReviewCreateMutation, ReviewCreateMutationVariables>;
export const ReviewGetListDocument = new TypedDocumentString(`
    query ReviewGetList($where: ReviewWhere!, $limit: Int, $orderBy: ReviewOrderBy) {
  reviews(where: $where, limit: $limit, orderBy: $orderBy) {
    ...ReviewListItem
  }
}
    fragment ReviewListItem on Review {
  id
  email
  title
  description
  author
  rating
  createdAt
}`) as unknown as TypedDocumentString<ReviewGetListQuery, ReviewGetListQueryVariables>;