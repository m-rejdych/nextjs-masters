import classNames from 'classnames';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';

interface Props {
	href: string;
	title: string;
	active?: boolean;
}

export const NavItemMobile = ({ href, title, active }: Props) => (
	<Disclosure.Button
		as={Link}
		href={href}
		className={classNames(
			'block border-l-4 py-2 pl-3 pr-4 text-base font-medium',
			active
				? 'border-primary-500 bg-primary-50 text-primary-700'
				: 'border-transparent text-neutral-500 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-700',
		)}
	>
		{title}
	</Disclosure.Button>
);
