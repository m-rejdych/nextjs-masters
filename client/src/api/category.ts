import { executeQuery } from '@/util/gql';
import { CategoryGetListDocument, type CategoryListItemFragment } from '@/gql/graphql';

export const getCategories = async (): Promise<CategoryListItemFragment[] | null> => {
	try {
		const { categories } = await executeQuery({ query: CategoryGetListDocument });

		return categories;
	} catch (error) {
		console.log(error);
		return null;
	}
};
