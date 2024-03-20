import Image from 'next/image';
import { ActiveLink } from '@/ui/atoms/nav/ActiveLink';
import type { CategoryListItemFragment, CollectionListItemFragment } from '@/gql/graphql';

type ListItem = CategoryListItemFragment | CollectionListItemFragment;

interface Props {
  image: ListItem['image'];
  name: ListItem['name'];
  slug: ListItem['slug'];
}

export const MobileMenuPanelsCategoryListItem = ({ slug, name, image: { alt, url } }: Props) => (
  <div className="group relative">
    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-neutral-100 group-hover:opacity-75">
      <Image src={url} alt={alt} className="object-cover object-center" width={400} height={400} />
    </div>
    <ActiveLink
      href={`/categories/${slug}`}
      className="mt-6 block text-sm font-medium text-neutral-900"
    >
      <span className="absolute inset-0 z-10" aria-hidden="true" />
      {name}
    </ActiveLink>
    <p aria-hidden="true" className="mt-1 text-sm text-neutral-500">
      Shop now
    </p>
  </div>
);
