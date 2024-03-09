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

type ExecuteQueryArgs<TResult, TVariables> = {
	query: TypedDocumentString<TResult, TVariables>;
	next?: NextFetchRequestConfig;
  cache?: RequestCache;
} & (TVariables extends Record<string, never> ? { variables?: never } : { variables: TVariables });

export const executeQuery = async <TResult, TVariables>({
	query,
	next,
  cache,
	variables,
}: ExecuteQueryArgs<TResult, TVariables>): Promise<TResult> => {
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
		next,
    cache,
	});

	const graphqlResponse = (await resposnse.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		throw new Error('GraphQL error', { cause: graphqlResponse.errors });
	}

	return graphqlResponse.data;
};
