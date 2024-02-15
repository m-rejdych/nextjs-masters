import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface Props {
	open: boolean;
}

export const NavMobileMenuButton = ({ open }: Props) => (
	<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
		<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
			<span className="absolute -inset-0.5" />
			<span className="sr-only">Open main menu</span>
			{open ? (
				<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
			) : (
				<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
			)}
		</Disclosure.Button>
	</div>
);
