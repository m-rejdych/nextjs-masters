Bun.serve({
	port: Bun.env.PORT,
	fetch: () => {
		return new Response(`Hi thre`);
	},
});

console.log(`Listening on http://localhost:${Bun.env.PORT}`);
