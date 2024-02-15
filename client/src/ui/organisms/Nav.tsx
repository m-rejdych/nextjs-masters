'use client';

import { Disclosure } from '@headlessui/react';

import { NavMobileMenuButton } from '@/ui/atoms/nav/NavMobileMenuButton';
import { NavItemsDesktop } from '@/ui/molecules/nav/NavItemsDesktop';
import { NavItemsMobile } from '@/ui/molecules/nav/NavItemsMobile';
import { NavProfileMenu } from '@/ui/molecules/nav/NavProfileMenu';

export const Nav = () => (
	<Disclosure as="nav" className="bg-white shadow">
		{({ open }) => (
			<>
				<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<div className="relative flex h-16 justify-between">
						<NavMobileMenuButton open={open} />
						<NavItemsDesktop />
						<NavProfileMenu />
					</div>
				</div>
				<NavItemsMobile />
			</>
		)}
	</Disclosure>
);
