import { type ReviewListItemFragment } from '@/gql/graphql';

interface Props {
  title: ReviewListItemFragment['title'];
  description: ReviewListItemFragment['description'];
}

export const ReviewsListItemDescription = ({ title, description }: Props) => (
  <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
    <h3 className="text-sm font-medium text-neutral-900">{title}</h3>
    <div className="mt-3 space-y-6">
      <p className="text-sm text-neutral-500">{description}</p>
    </div>
  </div>
);
