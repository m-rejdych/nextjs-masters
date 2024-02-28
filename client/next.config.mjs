/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
	},
	images: {
		remotePatterns: [{ hostname: 'loremflickr.com' }],
	},
};

export default nextConfig;
