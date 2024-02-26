import type { TypedDocumentString } from '@/gql/graphql';

interface GraphQLError {
	message: string;
}

type GraphQLResponse<T> =
	| {
			data: T;
			errors?: undefined;
	  }
	| {
			data?: undefined;
			errors: GraphQLError[];
	  };

export const executeQuery = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw new Error('GRAPHQL_URL is not defined');
	}

	const resposnse = await fetch(process.env.GRAPHQL_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	const graphqlResponse = (await resposnse.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		throw new Error('GraphQL error', { cause: graphqlResponse.errors });
	}

	return graphqlResponse.data;
};
