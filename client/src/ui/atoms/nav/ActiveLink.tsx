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
}

export const ActiveLink = <T extends string>({
	children,
	href,
	className,
	activeClassName,
	inactiveClassName,
}: Props<T>) => {
	const pathname = usePathname();
	const isActive = pathname === href;

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
