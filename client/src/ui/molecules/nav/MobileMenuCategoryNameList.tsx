import { Tab } from '@headlessui/react';
import { MobileMenuCategoryNameListItem } from '@/ui/atoms/nav/MobileMenuCategoryNameListItem';

export const MobileMenuCategoryNameList = () => (
	<Tab.List className="-mb-px flex space-x-8 px-4">
		<MobileMenuCategoryNameListItem name="Categories" />
		<MobileMenuCategoryNameListItem name="Collections" />
	</Tab.List>
);
