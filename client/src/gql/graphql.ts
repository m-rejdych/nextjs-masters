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
  Date: { input: unknown; output: unknown; }
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
  | 'BASICS'
  | 'HOODIES'
  | 'JACKETS'
  | 'SHIRTS';

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
  | 'ACCESSORIES'
  | 'BEAUTY'
  | 'NEW_ARRIVALS'
  | 'SPORT';

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
  inStock: Scalars['Boolean']['output'];
  name: ColorName;
  product: Product;
};

export type ColorName =
  | 'BLACK'
  | 'GRAY';

export type Detail = {
  __typename?: 'Detail';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  product: Product;
};

export type Node = {
  id: Scalars['ID']['output'];
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
  colors: Array<Color>;
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  details: Array<Detail>;
  id: Scalars['ID']['output'];
  images: Array<ProductImage>;
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  reviewCount: Scalars['Int']['output'];
  reviews: Array<Review>;
  sizes: Array<Size>;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type ProductImage = {
  __typename?: 'ProductImage';
  alt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
};

export type ProductWhere = {
  AND?: InputMaybe<Array<ProductWhereAnd>>;
  NOT?: InputMaybe<ProductWhereNot>;
  categories?: InputMaybe<CategoriesFilter>;
  collections?: InputMaybe<CollectionsFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ProductWhereAnd = {
  NOT?: InputMaybe<ProductWhereNot>;
  categories?: InputMaybe<CategoriesFilter>;
  collections?: InputMaybe<CollectionsFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ProductWhereNot = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  collections: Array<Collection>;
  node?: Maybe<Node>;
  nodes: Array<Maybe<Node>>;
  productById?: Maybe<Product>;
  products: QueryProductsConnection;
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


export type QueryProductByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhere>;
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
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  product: Product;
  rating: Scalars['Float']['output'];
  title: Scalars['String']['output'];
};

export type Size = {
  __typename?: 'Size';
  id: Scalars['ID']['output'];
  inStock: Scalars['Boolean']['output'];
  product: Product;
  type: SizeType;
};

export type SizeType =
  | 'L'
  | 'M'
  | 'S'
  | 'XL';

export type CategoryGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoryGetListQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, name: CategoryName, slug: string, image: { __typename?: 'CategoryImage', alt: string, url: string } }> };

export type CategoryListItemFragment = { __typename?: 'Category', id: string, name: CategoryName, slug: string, image: { __typename?: 'CategoryImage', alt: string, url: string } };

export type CollectionGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionGetListQuery = { __typename?: 'Query', collections: Array<{ __typename?: 'Collection', id: string, name: CollectionName, slug: string, image: { __typename?: 'CollectionImage', alt: string, url: string } }> };

export type CollectionListItemFragment = { __typename?: 'Collection', id: string, name: CollectionName, slug: string, image: { __typename?: 'CollectionImage', alt: string, url: string } };

export type ProductFragment = { __typename?: 'Product', rating?: number | null, reviewCount: number, id: string, name: string, description: string, price: number, categories: Array<{ __typename?: 'Category', id: string }>, collections: Array<{ __typename?: 'Collection', id: string }>, colors: Array<{ __typename?: 'Color', id: string, name: ColorName, inStock: boolean }>, sizes: Array<{ __typename?: 'Size', id: string, type: SizeType, inStock: boolean }>, details: Array<{ __typename?: 'Detail', id: string, description: string }>, images: Array<{ __typename?: 'ProductImage', id: string, url: string, alt: string }> };

export type ProductGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductGetByIdQuery = { __typename?: 'Query', productById?: { __typename?: 'Product', rating?: number | null, reviewCount: number, id: string, name: string, description: string, price: number, categories: Array<{ __typename?: 'Category', id: string }>, collections: Array<{ __typename?: 'Collection', id: string }>, colors: Array<{ __typename?: 'Color', id: string, name: ColorName, inStock: boolean }>, sizes: Array<{ __typename?: 'Size', id: string, type: SizeType, inStock: boolean }>, details: Array<{ __typename?: 'Detail', id: string, description: string }>, images: Array<{ __typename?: 'ProductImage', id: string, url: string, alt: string }> } | null };

export type ProductGetListQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ID']['input']>;
  where?: InputMaybe<ProductWhere>;
}>;


export type ProductGetListQuery = { __typename?: 'Query', products: { __typename?: 'QueryProductsConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean }, edges: Array<{ __typename?: 'QueryProductsConnectionEdge', node: { __typename?: 'Product', id: string, name: string, description: string, price: number, categories: Array<{ __typename?: 'Category', id: string }>, collections: Array<{ __typename?: 'Collection', id: string }>, images: Array<{ __typename?: 'ProductImage', id: string, url: string, alt: string }> } }> } };

export type ProductGetPageQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  where?: InputMaybe<ProductWhere>;
}>;


export type ProductGetPageQuery = { __typename?: 'Query', products: { __typename?: 'QueryProductsConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null } } };

export type ProductListItemFragment = { __typename?: 'Product', id: string, name: string, description: string, price: number, categories: Array<{ __typename?: 'Category', id: string }>, collections: Array<{ __typename?: 'Collection', id: string }>, images: Array<{ __typename?: 'ProductImage', id: string, url: string, alt: string }> };

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
export const ProductListItemFragmentDoc = new TypedDocumentString(`
    fragment ProductListItem on Product {
  id
  name
  description
  price
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
    id
    name
    inStock
  }
  sizes {
    id
    type
    inStock
  }
  details {
    id
    description
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  price
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
export const ProductGetByIdDocument = new TypedDocumentString(`
    query ProductGetById($id: ID!) {
  productById(id: $id) {
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
    id
    name
    inStock
  }
  sizes {
    id
    type
    inStock
  }
  details {
    id
    description
  }
}
fragment ProductListItem on Product {
  id
  name
  description
  price
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
    query ProductGetList($first: Int, $after: ID, $where: ProductWhere) {
  products(first: $first, after: $after, where: $where) {
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
  description
  price
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
    query ProductGetPage($first: Int!, $where: ProductWhere) {
  products(first: $first, where: $where) {
    pageInfo {
      endCursor
    }
  }
}
    `) as unknown as TypedDocumentString<ProductGetPageQuery, ProductGetPageQueryVariables>;