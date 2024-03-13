import { capitalize } from '@/util/formatStr';
import type { ProductOrderBy } from '@/gql/graphql';

export type SortTypeParam = 'price' | 'rating';
export type SortOrderParam = 'desc' | 'asc';
type SortOrder = 'Desc' | 'Asc';

const parseSortOrderParam = (param?: SortOrderParam): SortOrder =>
	param ? (capitalize(param) as SortOrder) : 'Desc';

export const getOrderBy = (
	sortType: SortTypeParam | undefined,
	sortOrder: SortOrderParam | undefined,
): ProductOrderBy | undefined => {
	if (!sortType) return undefined;

	switch (sortType) {
		case 'price':
			return { price: parseSortOrderParam(sortOrder) };
		case 'rating':
			return { rating: parseSortOrderParam(sortOrder) };
		default:
			return undefined;
	}
};
