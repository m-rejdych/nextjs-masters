import { Tab } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

interface Props {
	name: 'Categories' | 'Collections';
}

export const MobileMenuCategoryNameListItem = ({ name }: Props) => (
	<Tab
		className={({ selected }) =>
			twMerge(
				selected ? 'border-primary-600 text-primary-600' : 'border-transparent text-neutral-900',
				'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium',
			)
		}
	>
		{name}
	</Tab>
);
