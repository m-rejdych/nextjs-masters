import { ReviewFormFields } from '@/ui/molecules/reviews/ReviewFormFields';
import { ReviewFormHeading } from '@/ui/atoms/reviews/ReviewFormHeading';

interface Props {
	productId: string;
}

export const ReviewForm = ({ productId }: Props) => (
	<div className="space-y-10 divide-y divide-neutral-900/10">
		<div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
			<ReviewFormHeading />
			<ReviewFormFields productId={productId} />
		</div>
	</div>
);
