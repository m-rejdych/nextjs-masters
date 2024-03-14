import { executeQuery } from '@/util/gql';
import {
  ReviewGetListByProductIdDocument,
  ReviewCreateDocument,
  type ReviewListItemFragment,
  type ReviewOrderBy,
  type ReviewCreateInput,
} from '@/gql/graphql';

export const getReviewsByProductId = async (
  productId: string,
  limit?: number,
  orderBy?: ReviewOrderBy,
): Promise<ReviewListItemFragment[] | null> => {
  try {
    const { reviewsByProductId } = await executeQuery({
      query: ReviewGetListByProductIdDocument,
      variables: { productId, limit, orderBy },
      next: { tags: ['reviews'] },
    });
    return reviewsByProductId;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const createReview = async (
  input: ReviewCreateInput,
): Promise<ReviewListItemFragment | null> => {
  try {
    const { createReview } = await executeQuery({
      query: ReviewCreateDocument,
      variables: { input },
    });
    return createReview;
  } catch (error) {
    console.log(error);
    return null;
  }
};
