import { CurrencyDollarIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline';
import type { Product, Policy } from '@/types/products';

export const PRODUCTS: Product[] = [
	{
		id: 'p-1',
		name: 'Blue t-shirt',
		description: "You've never seen a blue t-shirt like this. Trust us.",
		image: {
			src: '/shirts/blue-t-shirt.jpg',
			alt: 'blue t-shirt',
		},
		price: 2499,
	},
	{
		id: 'p-2',
		name: 'Bright purple t-shirt',
		description: "You've never seen a bright purple t-shirt like this. Trust us.",
		image: {
			src: '/shirts/bright-purple-t-shirt.jpg',
			alt: 'bright purple t-shirt',
		},
		price: 2499,
	},
	{
		id: 'p-3',
		name: 'Cobalt blue t-shirt',
		description: "You've never seen a cobalt blue t-shirt like this. Trust us.",
		image: {
			src: '/shirts/cobalt-blue-t-shirt.jpg',
			alt: 'cobalt blue t-shirt',
		},
		price: 2499,
	},
	{
		id: 'p-4',
		name: 'Green t-shirt',
		description: "You've never seen a green t-shirt like this. Trust us.",
		image: {
			src: '/shirts/green-t-shirt.jpg',
			alt: 'green t-shirt',
		},
		price: 2499,
	},
	{
		id: 'p-5',
		name: 'Grey t-shirt',
		description: "You've never seen a grey t-shirt like this. Trust us.",
		image: {
			src: '/shirts/grey-t-shirt.jpg',
			alt: 'grey t-shirt',
		},
		price: 2499,
	},
	{
		id: 'p-6',
		name: 'Light green t-shirt',
		description: "You've never seen a light green t-shirt like this. Trust us.",
		image: {
			src: '/shirts/light-green-t-shirt.jpg',
			alt: 'light green t-shirt',
		},
		price: 2499,
	},
	{
		id: 'p-7',
		name: 'Purple t-shirt',
		description: "You've never seen a purple t-shirt like this. Trust us.",
		image: {
			src: '/shirts/purple-t-shirt.jpg',
			alt: 'purple t-shirt',
		},
		price: 2499,
	},
	{
		id: 'p-8',
		name: 'Red t-shirt',
		description: "You've never seen a red t-shirt like this. Trust us.",
		image: {
			src: '/shirts/red-t-shirt.jpg',
			alt: 'red t-shirt',
		},
		price: 2499,
	},
	{
		id: 'p-9',
		name: 'Teal t-shirt',
		description: "You've never seen a teal t-shirt like this. Trust us.",
		image: {
			src: '/shirts/teal-t-shirt.jpg',
			alt: 'teal t-shirt',
		},
		price: 2499,
	},
] as const;

export const POLICIES: Policy[] = [
	{
		name: 'International delivery',
		Icon: GlobeAmericasIcon,
		description: 'Get your order in 2 years',
	},
	{ name: 'Loyalty rewards', Icon: CurrencyDollarIcon, description: "Don't look at other tees" },
] as const;
