import { revalidateTag } from 'next/cache';
import { ReviewFormNameInput } from '@/ui/atoms/reviews/ReviewFormNameInput';
import { ReviewFormEmailInput } from '@/ui/atoms/reviews/ReviewFormEmailInput';
import { ReviewFormTitleInput } from '@/ui/atoms/reviews/ReviewFromTitleInput';
import { ReviewFormDescriptionInput } from '@/ui/atoms/reviews/ReviewFormDescriptionInput';
import { ReviewFormAddButton } from '@/ui/atoms/reviews/ReviewFormAddButton';
import { ReviewFormRatingInput } from '@/ui/atoms/reviews/ReviewFormRatingInput';
import { createReview } from '@/api/review';

interface Props {
	productId: string;
}

export const ReviewFormFields = ({ productId }: Props) => {
	const handleAction = async (formData: FormData) => {
		'use server';

		const author = formData.get('author');
		const email = formData.get('email');
		const title = formData.get('title');
		const description = formData.get('description');
		const rating = Number(formData.get('rating'));
		if (!author || !email || !title || !description || !rating) return;

		await createReview({
			author: author as string,
			email: email as string,
			title: title as string,
			description: description as string,
			rating,
			product: { connect: { id: productId } },
		});
		revalidateTag('reviews');
		revalidateTag('product');
	};

	return (
		<form
			className="bg-white shadow-sm ring-1 ring-neutral-900/5 sm:rounded-xl md:col-span-2"
			action={handleAction}
		>
			<div className="px-4 py-6 sm:p-8">
				<div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
					<ReviewFormNameInput />
					<ReviewFormEmailInput />
					<ReviewFormTitleInput />
					<ReviewFormDescriptionInput />
					<ReviewFormRatingInput />
				</div>
			</div>
			<div className="flex items-center justify-end gap-x-6 border-t border-neutral-900/10 px-4 py-4 sm:px-8">
				<ReviewFormAddButton />
			</div>
		</form>
	);
};
