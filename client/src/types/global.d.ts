declare global {
	namespace NodeJS {
		interface ProcessEnv {
			GRAPHQL_URL: string;
		}
	}
}
