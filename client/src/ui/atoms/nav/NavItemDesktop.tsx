import Link from 'next/link';
import { clsx } from 'clsx';

interface Props {
	href: string;
	title: string;
	active?: boolean;
}

export const NavItemDesktop = ({ href, title, active }: Props) => (
	<Link
		href={href}
		className={clsx(
			'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
			active
				? 'border-primary-500 text-neutral-900'
				: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
		)}
	>
		{title}
	</Link>
);
