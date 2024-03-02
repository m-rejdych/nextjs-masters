import Image from 'next/image';
import { ActiveLink } from '@/ui/atoms/nav/ActiveLink';
import type { CategoryListItemFragment, CollectionListItemFragment } from '@/gql/graphql';

type ListItem = CategoryListItemFragment | CollectionListItemFragment;

interface Props {
	image: ListItem['image'];
	name: ListItem['name'];
	slug: ListItem['slug'];
	variant: 'categories' | 'collections';
}

export const CategoryPopoverListItem = ({ name, slug, variant, image: { alt, url } }: Props) => (
	<div key={name} className="group relative">
		<div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
			<Image src={url} alt={alt} width={400} height={400} className="object-cover object-center" />
		</div>
		<ActiveLink href={`/${variant}/${slug}`} className="mt-4 block font-medium text-gray-900">
			<span className="absolute inset-0 z-10" aria-hidden="true" />
			{name}
		</ActiveLink>
		<p aria-hidden="true" className="mt-1">
			Shop now
		</p>
	</div>
);
