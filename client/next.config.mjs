/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
	},
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{ hostname: 'loremflickr.com', protocol: 'https' },
			{ hostname: 'tailwindui.com', protocol: 'https' },
			{ hostname: 'fakestoreapi.com', protocol: 'https' },
			{ hostname: 'cdn.dummyjson.com', protocol: 'https' },
			{ hostname: 'localhost', protocol: 'http' },
			{ hostname: 'nextjs-shop-api.mrejdych.com', protocol: 'https' },
		],
	},
	async redirects() {
		return [
			{ source: '/products', destination: '/products/1', permanent: false },
			{ source: '/categories/:slug', destination: '/categories/:slug/1', permanent: false },
			{ source: '/collections/:slug', destination: '/collections/:slug/1', permanent: false },
		];
	},
};

export default nextConfig;
