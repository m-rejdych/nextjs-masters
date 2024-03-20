import { parseDate, parseTime } from '@/util/date';
import type { ReviewListItemFragment } from '@/gql/graphql';

interface Props {
  author: ReviewListItemFragment['author'];
  createdAt: ReviewListItemFragment['createdAt'];
}

export const ReviewsListItemMeta = ({ author, createdAt }: Props) => (
  <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
    <p className="font-medium text-neutral-900">{author}</p>
    <time
      dateTime={parseTime(createdAt)}
      className="ml-4 border-l border-neutral-200 pl-4 text-neutral-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
    >
      {parseDate(createdAt)}
    </time>
  </div>
);
