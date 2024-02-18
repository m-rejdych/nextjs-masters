import { Disclosure } from '@headlessui/react';
import type { Route } from 'next';
import { ActiveLink } from './ActiveLink';

interface Props<T extends string> {
	href: Route<T>;
	title: string;
}

export const NavItemMobile = <T extends string>({ href, title }: Props<T>) => (
	<Disclosure.Button
		as={ActiveLink}
		href={href}
		className="block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
		inactiveClassName="border-transparent text-neutral-500 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-700"
		activeClassName="border-primary-500 bg-primary-50 text-primary-700"
	>
		{title}
	</Disclosure.Button>
);
