import type { ReviewListItemFragment } from '@/gql/graphql';

interface Props {
	author: ReviewListItemFragment['author'];
	createdAt: ReviewListItemFragment['createdAt'];
}

const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
] as const;

const parseTime = (dateString: string): string => {
  const date = new Date(dateString);
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();

	return `${hours}:${minutes}:${seconds}`;
};

const parseDate = (dateString: string): string => {
  const date = new Date(dateString);
	const day = date.getDate();
	const month = MONTHS[date.getMonth()];
	const year = date.getFullYear();

	return `${month} ${day}, ${year}`;
};

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
