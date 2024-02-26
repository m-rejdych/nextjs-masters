import type { ComponentType } from 'react';
import type { ProductGetListQuery, ProductGetQuery } from '@/gql/graphql';

export type Product = ProductGetListQuery['products']['edges'][number]['node'];

export type ExtendedProduct = NonNullable<ProductGetQuery['product']>;

export interface Policy {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: ComponentType<any>;
  description: string;
}
