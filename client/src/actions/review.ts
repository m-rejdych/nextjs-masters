'use server';

import { revalidateTag } from 'next/cache';
import { createReview } from '@/api/review';

export const handleCreateReviewAction = async (formData: FormData, productId: string): Promise<boolean> => {
		const author = formData.get('name');
		const email = formData.get('email');
		const title = formData.get('headline');
		const description = formData.get('content');
		const rating = Number(formData.get('rating'));
		if (!author || !email || !title || !description || !rating) return false;

		await createReview({
			author: author as string,
			email: email as string,
			title: title as string,
			description: description as string,
			rating,
			productId,
		});
		revalidateTag('reviews');
		revalidateTag('product');

    return true;
};
