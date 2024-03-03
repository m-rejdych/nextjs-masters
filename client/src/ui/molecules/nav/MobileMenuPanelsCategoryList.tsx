import { MobileMenuPanelsCategoryListItem } from '@/ui/atoms/nav/MobileMenuPanelsCategoryListItem';
import { getCategories } from '@/api/category';
import { getCollections } from '@/api/collection';

interface Props {
	variant: 'categories' | 'collections';
}

export const MobileMenuPanelsCategoryList = async ({ variant }: Props) => {
	const items = variant === 'categories' ? await getCategories() : await getCollections();

	return (
		<div className="grid grid-cols-2 gap-x-4 gap-y-10">
			{items?.map(({ id, ...rest }) => <MobileMenuPanelsCategoryListItem key={id} {...rest} />)}
		</div>
	);
};
