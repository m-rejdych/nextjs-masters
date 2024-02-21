'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import type { Route } from 'next';

interface Props<T extends string> {
	children: React.ReactNode;
	href: Route<T>;
	className?: string;
	activeClassName?: string;
	inactiveClassName?: string;
	exact?: boolean;
}

export const ActiveLink = <T extends string>({
	children,
	href,
	className,
	activeClassName,
	inactiveClassName,
	exact = true,
}: Props<T>) => {
	const pathname = usePathname();
	const isActive = exact ? pathname === href : pathname.startsWith(href);

	return (
		<Link
			href={href}
			className={twMerge(className, isActive ? activeClassName : inactiveClassName)}
			aria-current={isActive}
		>
			{children}
		</Link>
	);
};