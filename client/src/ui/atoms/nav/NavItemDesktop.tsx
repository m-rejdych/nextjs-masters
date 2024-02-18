import type { Route } from 'next';
import { ActiveLink } from './ActiveLink';

interface Props<T extends string> {
	href: Route<T>;
	title: string;
}

export const NavItemDesktop = <T extends string>({ href, title }: Props<T>) => (
	<ActiveLink
		href={href}
		className="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
		inactiveClassName="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
		activeClassName="border-primary-500 text-neutral-900"
	>
		{title}
	</ActiveLink>
);
