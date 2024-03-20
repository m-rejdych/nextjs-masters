import { executeQuery } from '@/util/gql';
import {
  ReviewGetListDocument,
  ReviewCreateDocument,
  type ReviewListItemFragment,
  type ReviewOrderBy,
  type ReviewCreateInput,
  type ReviewWhere,
} from '@/gql/graphql';

export const getReviews = async (
  where: ReviewWhere,
  limit?: number,
  orderBy?: ReviewOrderBy,
): Promise<ReviewListItemFragment[] | null> => {
  try {
    const { reviews } = await executeQuery({
      query: ReviewGetListDocument,
      variables: { where, limit, orderBy },
      next: { tags: ['reviews'] },
    });
    return reviews;
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
