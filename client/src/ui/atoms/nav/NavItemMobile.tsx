import classNames from 'classnames';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';

interface Props {
	href: string;
	title: string;
	active?: boolean;
}

const ACTIVE_CLASS = 'bg-indigo-50 border-primary-500 text-primary-700' as const;
const INACTIVE_CLASS =
	'border-transparent text-neutral-500 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-700' as const;

export const NavItemMobile = ({ href, title, active }: Props) => (
	<Disclosure.Button
		as={Link}
		href={href}
		className={classNames(
			'block border-l-4 py-2 pl-3 pr-4 text-base font-medium',
			active ? ACTIVE_CLASS : INACTIVE_CLASS,
		)}
	>
		{title}
	</Disclosure.Button>
);
