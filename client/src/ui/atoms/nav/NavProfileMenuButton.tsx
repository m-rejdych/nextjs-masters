import { Menu } from "@headlessui/react";

export const NavProfileMenuButton = () => (
	<Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
		<span className="absolute -inset-1.5" />
		<span className="sr-only">Open user menu</span>
		<img className="h-8 w-8 rounded-full" src="/avatar.jpg" alt="avatar" />
	</Menu.Button>
);
