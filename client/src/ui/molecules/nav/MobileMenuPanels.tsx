import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import type { CategoryVariant } from '@/types/common';
import { PAGES } from '@/constants/pages';
import { ActiveLink } from '@/ui/atoms/nav/ActiveLink';

interface Props {
	panelItems: CategoryVariant[];
}

export const MobileMenuPanels = ({ panelItems }: Props) => (
	<Tab.Panels as={Fragment}>
		{panelItems.map(({ variant, node }) => (
			<Tab.Panel key={variant} className="space-y-12 px-4 py-6">
				{node}
			</Tab.Panel>
		))}
		<div className="space-y-6 border-t border-gray-200 px-4 py-6">
			{PAGES.map(({ name, href, exact }) => (
				<div key={name} className="flow-root">
					<ActiveLink
						href={href}
						exact={exact}
						className="-m-2 block p-2 font-medium text-gray-900"
					>
						{name}
					</ActiveLink>
				</div>
			))}
		</div>
	</Tab.Panels>
);
