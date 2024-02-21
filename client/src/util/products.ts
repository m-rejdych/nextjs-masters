import type { Product, ExtendedProduct } from '@/types/products';

export const parseProduct = ({ image, ...product }: Product): ExtendedProduct => ({
	...product,
	rating: 4,
	reviewCount: 34,
	images: [
		{
			id: '1',
			src: image.src,
			alt: image.alt,
			primary: true,
		},
		{
			id: '2',
			src: image.src,
			alt: image.alt,
			primary: false,
		},
		{
			id: '3',
			src: image.src,
			alt: image.alt,
			primary: false,
		},
	],
	colors: [
		{ name: 'Black', bgColor: 'gray900', selectedColor: 'gray900' },
		{ name: 'Heather Grey', bgColor: 'gray400', selectedColor: 'gray400' },
	],
	sizes: [
		{ name: 'S', inStock: true },
		{ name: 'M', inStock: true },
		{ name: 'L', inStock: false },
		{ name: 'XL', inStock: true },
	],
	details: [
		'5.3 oz., 100% cotton',
		'High-density fabric',
		'Tearaway label',
		'Double-needle hemmed sleeves and bottom',
		'Seamless 7/8" collar',
		'Taped neck and shoulders',
		'Quarter-turned to eliminate center crease',
	],
});
