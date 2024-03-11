import { executeQuery } from '@/util/gql';
import { ReviewGetListByProductIdDocument, type ReviewListItemFragment, type ReviewOrderBy } from '@/gql/graphql';

export const getReviewsByProductId = async (
	productId: string,
  limit?: number,
  orderBy?: ReviewOrderBy,
): Promise<ReviewListItemFragment[] | null> => {
	try {
		const { reviewsByProductId } = await executeQuery({
			query: ReviewGetListByProductIdDocument,
			variables: { productId, limit, orderBy },
		});
		return reviewsByProductId;
	} catch (error) {
		console.log(error);
		return null;
	}
};
