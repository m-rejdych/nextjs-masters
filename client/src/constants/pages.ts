import type { Route } from 'next';

interface Page {
	name: string;
	href: Route;
	exact?: boolean;
}

export const PAGES = [
	{
		name: 'Home',
		href: '/',
		exact: true,
	},
	{
		name: 'All',
		href: '/products',
	},
] satisfies Page[];
