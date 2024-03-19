import { Popover } from '@headlessui/react';
import { CategoryPopover } from '@/ui/molecules/nav/CategoryPopover';
import { ActiveLink } from '@/ui/atoms/nav/ActiveLink';
import { PAGES } from '@/constants/pages';
import type { CategoryVariant } from '@/types/common';

interface Props {
  items: CategoryVariant[];
}
export const FlyoutMenus = ({ items }: Props) => (
  <div className="z-10 hidden h-full lg:flex">
    <Popover.Group className="inset-x-0 bottom-0 px-4">
      <div className="flex h-full justify-center space-x-8">
        {PAGES.map(({ name, href, exact }) => (
          <ActiveLink
            key={name}
            href={href}
            exact={exact}
            className="flex items-center text-sm font-medium text-neutral-700 hover:text-neutral-800"
          >
            {name}
          </ActiveLink>
        ))}
        {items.map(({ variant, node }) => (
          <CategoryPopover key={variant} variant={variant}>
            {node}
          </CategoryPopover>
        ))}
      </div>
    </Popover.Group>
  </div>
);
