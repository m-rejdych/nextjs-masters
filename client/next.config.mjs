/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
	},
	images: {
		remotePatterns: [{ hostname: 'loremflickr.com' }],
	},
	async redirects() {
    return [
      {
        source: '/products',
        destination: '/products/1',
        permanent: false,
      },
    ];
  }
};

export default nextConfig;
