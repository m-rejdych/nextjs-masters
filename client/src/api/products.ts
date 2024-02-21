import type { Product } from '@/types/products';

interface ApiProduct {
	id: string;
	title: string;
	description: string;
	price: number;
	category: string;
	rating: { rage: number; count: number };
	image: string;
	longDescription: string;
}

export const getProducts = async (
	take?: string | number,
	offset?: string | number,
): Promise<Product[] | null> => {
	try {
		const params = new URLSearchParams();
		if (take) params.set('take', take.toString());
		if (offset) params.set('offset', offset.toString());

		const response = await fetch(
			`https://naszsklep-api.vercel.app/api/products${params.size ? `?${params.toString()}` : ''}`,
		);
		const data = (await response.json()) as ApiProduct[];
		return data.map(({ id, title, description, price, image }) => ({
			id,
			name: title,
			description,
			price,
			image: {
				src: image,
				alt: title,
			},
		}));
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const getProduct = async (id: string): Promise<Product | null> => {
	try {
		const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
		const data = (await response.json()) as ApiProduct;
		return {
			id: data.id,
			name: data.title,
			description: data.description,
			price: data.price,
			image: {
				src: data.image,
				alt: data.title,
			},
		};
	} catch (error) {
		console.log(error);
		return null;
	}
};
