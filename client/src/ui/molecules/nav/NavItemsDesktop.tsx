import { NavItemDesktop } from '@/ui/atoms/nav/NavItemDesktop';

export const NavItemsDesktop = () => (
	<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
		<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
			<NavItemDesktop title="Home" href="/products" />
			<NavItemDesktop title="All" href="/products" />
		</div>
	</div>
);
