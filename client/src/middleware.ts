import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({ 
publicRoutes: [
  '/',
  '/products',
  '/products(.*)',
  '/categories',
  '/categories(.*)',
  '/collections',
  '/collections(.*)',
  '/search',
  '/search(.*)',
  '/checkout',
  '/cart',
  '/api(.*)'
]});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/(api|trpc)(.*)"
  ]
};
