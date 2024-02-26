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

export type Category = {
  __typename?: 'Category';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: CategoryName;
  products: Array<Product>;
};

export type CategoryName =
  | 'BASICS'
  | 'HOODIES'
  | 'JACKETS'
  | 'JEANS'
  | 'SHIRTS'
  | 'SHOES'
  | 'SHORTS'
  | 'SOCKETS'
  | 'SWEATERS'
  | 'TROUSERS'
  | 'T_SHIRTS'
  | 'UNDERWEAR';

export type Collection = {
  __typename?: 'Collection';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: CollectionName;
  products: Array<Product>;
};

export type CollectionName =
  | 'BABY'
  | 'BEAUTY'
  | 'MAN'
  | 'NEW_ARRIVALS'
  | 'SPORT'
  | 'WOMAN';

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

export type Image = {
  __typename?: 'Image';
  alt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
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
  images: Array<Image>;
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  reviewCount: Scalars['Int']['output'];
  reviews: Array<Review>;
  sizes: Array<Size>;
  slug: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  node?: Maybe<Node>;
  nodes: Array<Maybe<Node>>;
  product?: Maybe<Product>;
  products: QueryProductsConnection;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
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

export type ProductGetQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductGetQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, name: string, description: string, price: number, rating?: number | null, reviewCount: number, images: Array<{ __typename?: 'Image', id: string, url: string, alt: string }>, colors: Array<{ __typename?: 'Color', id: string, name: ColorName, inStock: boolean }>, sizes: Array<{ __typename?: 'Size', id: string, type: SizeType, inStock: boolean }>, details: Array<{ __typename?: 'Detail', id: string, description: string }> } | null };

export type ProductGetListQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ProductGetListQuery = { __typename?: 'Query', products: { __typename?: 'QueryProductsConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean }, edges: Array<{ __typename?: 'QueryProductsConnectionEdge', node: { __typename?: 'Product', id: string, name: string, description: string, price: number, images: Array<{ __typename?: 'Image', id: string, url: string, alt: string }> } }> } };

export type ProductGetPageQueryVariables = Exact<{
  first: Scalars['Int']['input'];
}>;


export type ProductGetPageQuery = { __typename?: 'Query', products: { __typename?: 'QueryProductsConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null } } };

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

export const ProductGetDocument = new TypedDocumentString(`
    query ProductGet($id: ID!) {
  product(id: $id) {
    id
    name
    description
    price
    images {
      id
      url
      alt
    }
    rating
    reviewCount
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
}
    `) as unknown as TypedDocumentString<ProductGetQuery, ProductGetQueryVariables>;
export const ProductGetListDocument = new TypedDocumentString(`
    query ProductGetList($first: Int, $after: ID) {
  products(first: $first, after: $after) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    edges {
      node {
        id
        name
        description
        price
        images {
          id
          url
          alt
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<ProductGetListQuery, ProductGetListQueryVariables>;
export const ProductGetPageDocument = new TypedDocumentString(`
    query ProductGetPage($first: Int!) {
  products(first: $first) {
    pageInfo {
      endCursor
    }
  }
}
    `) as unknown as TypedDocumentString<ProductGetPageQuery, ProductGetPageQueryVariables>;