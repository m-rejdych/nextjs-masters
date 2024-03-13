import { executeQuery } from '@/util/gql';
import { CollectionGetListDocument, type CollectionListItemFragment } from '@/gql/graphql';

export const getCollections = async (): Promise<CollectionListItemFragment[] | null> => {
  try {
    const { collections } = await executeQuery({ query: CollectionGetListDocument });

    return collections;
  } catch (error) {
    console.log(error);
    return null;
  }
};
