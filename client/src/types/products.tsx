import type { ComponentType } from 'react';

type ColorVariant = 'gray900' | 'gray400';

export interface Product {
	id: string;
	name: string;
	description: string;
	price: number;
	image: Image;
}

export interface ExtendedProduct extends Omit<Product, 'image'> {
	rating: number;
	reviewCount: number;
	images: ExtendedImage[];
  colors: Color[];
  sizes: Size[];
  details: string[];
}

interface Image {
	src: string;
	alt: string;
}

interface ExtendedImage extends Image {
	id: string;
	primary: boolean;
}

interface Color {
  name: string;
  bgColor: ColorVariant;
  selectedColor: ColorVariant
}

interface Size {
  name: string;
  inStock: boolean;
}

export interface Policy {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: ComponentType<any>;
  description: string;
}
