import { CategoryPopoverListItem } from '@/ui/atoms/nav/CategoryPopoverListItem';
import { getCategories } from '@/api/category';
import { getCollections } from '@/api/collection';
import { capitalize, removeUnderscores } from '@/util/formatStr';

interface Props {
  variant: 'collections' | 'categories';
}

export const CategoryPopoverList = async ({ variant }: Props) => {
  const items = variant === 'collections' ? await getCollections() : await getCategories();

  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
          {items?.map(({ id, name, ...rest }) => (
            <CategoryPopoverListItem
              key={id}
              variant={variant}
              name={capitalize(removeUnderscores(name))}
              {...rest}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
