import { executeQuery } from '@/util/gql';
import {
	ProductGetListDocument,
	ProductGetPageDocument,
	ProductGetByIdDocument,
	type ProductFragment,
	type ProductListItemFragment,
	type ProductWhere,
	type ProductWhereUnique,
} from '@/gql/graphql';

interface GetProductsResult {
	hasNextPage: boolean;
	hasPreviousPage: boolean;
	totalCount: number;
	data: ProductListItemFragment[];
}

export const getProducts = async (
	take?: number,
	offset?: number,
	where?: ProductWhere,
): Promise<GetProductsResult | null> => {
	try {
		// Temporary solution for offsed based pagination integration
		let endCursor: string | null | undefined = null;
		if (offset) {
			const {
				products: { pageInfo },
			} = await executeQuery({
				query: ProductGetPageDocument,
				variables: { first: offset, where },
			});
			endCursor = pageInfo.endCursor;
		}

		const {
			products: {
				edges,
				totalCount,
				pageInfo: { hasPreviousPage, hasNextPage },
			},
		} = await executeQuery({
			query: ProductGetListDocument,
			variables: { first: take, after: endCursor, where },
		});

		return {
			hasNextPage,
			hasPreviousPage,
			totalCount,
			data: edges.map(({ node }) => node),
		};
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const getProduct = async (where: ProductWhereUnique): Promise<ProductFragment | null> => {
	try {
		const { product } = await executeQuery({
			query: ProductGetByIdDocument,
			variables: { where },
		});

		return product ?? null;
	} catch (error) {
		console.log(error);
		return null;
	}
};
