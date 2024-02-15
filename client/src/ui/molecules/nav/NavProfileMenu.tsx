import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

import { NavProfileMenuItem } from '@/ui/atoms/nav/NavProfileMenuItem';
import { NavProfileMenuButton } from '@/ui/atoms/nav/NavProfileMenuButton';

export const NavProfileMenu = () => (
	<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
		{/* Profile dropdown */}
		<Menu as="div" className="relative ml-3">
			<NavProfileMenuButton />
			<Transition
				as={Fragment}
				enter="transition ease-out duration-200"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<NavProfileMenuItem title="Your profile" href="/" />
					<NavProfileMenuItem title="Settings" href="/" />
					<NavProfileMenuItem title="Sign out" href="/" />
				</Menu.Items>
			</Transition>
		</Menu>
	</div>
);
