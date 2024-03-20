import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({ 
publicRoutes: [
  '/',
  '/products',
  '/products(.*)',
  '/product(.*)',
  '/categories',
  '/categories(.*)',
  '/collections',
  '/collections(.*)',
  '/search',
  '/search(.*)',
  '/checkout',
  '/cart',
  '/order(.*)',
  '/api(.*)'
]});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/(api|trpc)(.*)"
  ]
};
