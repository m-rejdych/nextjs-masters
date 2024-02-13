import * as productQueries from './product/query';
import type { Resolvers } from './generated/graphql';

export const resolvers: Resolvers = {
	Query: {
    ...productQueries,
	},
};
