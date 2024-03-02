import Link from 'next/link';

export const DesktopMenuSearchButton = () => (
	<Link
		href="/"
		className="hidden text-sm font-medium text-neutral-700 hover:text-neutral-800 lg:block"
	>
		Search
	</Link>
);
