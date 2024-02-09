export interface Product {
  id: string;
	name: string;
	description: string;
	price: number;
	img: {
		src: string;
		alt: string;
	};
}
