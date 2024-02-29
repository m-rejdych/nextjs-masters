import { executeQuery } from '@/util/gql';
import {
	ProductGetListDocument,
	ProductGetPageDocument,
	ProductGetProductByIdDocument,
	type ProductFragment,
	type ProductListItemFragment,
} from '@/gql/graphql';

interface GetProductsResult {
	hasNextPage: boolean;
	hasPreviousPage: boolean;
	data: ProductListItemFragment[];
}

export const getProducts = async (
	take?: number,
	offset?: number,
): Promise<GetProductsResult | null> => {
	try {
		// Temporary solution for offsed based pagination integration
		let endCursor: string | null | undefined = null;
		if (offset) {
			const {
				products: { pageInfo },
			} = await executeQuery(ProductGetPageDocument, { first: offset });
			endCursor = pageInfo.endCursor;
		}

		const {
			products: {
				edges,
				pageInfo: { hasPreviousPage, hasNextPage },
			},
		} = await executeQuery(ProductGetListDocument, { first: take, after: endCursor });

		return {
			hasNextPage,
			hasPreviousPage,
			data: edges.map(({ node }) => node),
		};
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const getProduct = async (id: string): Promise<ProductFragment | null> => {
	try {
		const { productById } = await executeQuery(ProductGetProductByIdDocument, { id });

		return productById ?? null;
	} catch (error) {
		console.log(error);
		return null;
	}
};
