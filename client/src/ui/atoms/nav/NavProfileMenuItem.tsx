import Link from 'next/link';
import { Menu } from '@headlessui/react';
import { clsx } from 'clsx';

interface Props {
	href: string;
	title: string;
}

export const NavProfileMenuItem = ({ href, title }: Props) => (
	<Menu.Item>
		{({ active }) => (
			<Link
				href={href}
				className={clsx(
					active ? 'bg-neutral-100' : '',
					'block px-4 py-2 text-sm text-neutral-700',
				)}
			>
				{title}
			</Link>
		)}
	</Menu.Item>
);
