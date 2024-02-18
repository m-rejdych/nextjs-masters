import Link from 'next/link';
import { Menu } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';
import type { Route } from 'next';

interface Props<T extends string> {
	href: Route<T>;
	title: string;
}

export const NavProfileMenuItem = <T extends string>({ href, title }: Props<T>) => (
	<Menu.Item>
		{({ active }) => (
			<Link
				href={href}
				className={twMerge(
					active ? 'bg-neutral-100' : '',
					'block px-4 py-2 text-sm text-neutral-700',
				)}
			>
				{title}
			</Link>
		)}
	</Menu.Item>
);
