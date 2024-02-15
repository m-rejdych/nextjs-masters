import { Disclosure } from '@headlessui/react';

import { NavItemMobile } from '@/ui/atoms/nav/NavItemMobile';

export const NavItemsMobile = () => (
	<Disclosure.Panel className="sm:hidden">
		<div className="space-y-1 pb-4 pt-2">
			<NavItemMobile title="Dashboard" href="/" active />
			<NavItemMobile title="Team" href="/" />
			<NavItemMobile title="Project" href="/" />
			<NavItemMobile title="Calendar" href="/" />
		</div>
	</Disclosure.Panel>
);
