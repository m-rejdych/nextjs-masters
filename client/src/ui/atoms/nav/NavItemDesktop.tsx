import classNames from 'classnames';
import Link from 'next/link';

interface Props {
	href: string;
	title: string;
	active?: boolean;
}

const ACTIVE_CLASS = 'border-primary-500 text-neutral-900' as const;
const INACTIVE_CLASS =
	'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700' as const;

export const NavItemDesktop = ({ href, title, active }: Props) => (
	<Link
		href={href}
		className={classNames(
			'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
			active ? ACTIVE_CLASS : INACTIVE_CLASS,
		)}
	>
		{title}
	</Link>
);
