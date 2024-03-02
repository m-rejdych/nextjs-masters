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
		],
	},
	async redirects() {
		return [
			{
				source: '/products',
				destination: '/products/1',
				permanent: false,
			},
		];
	},
};

export default nextConfig;
