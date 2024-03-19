import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { CategoryPopoverTitleButton } from '@/ui/atoms/nav/CategoryPopoverTitleButton';

interface Props {
  variant: 'collections' | 'categories';
  children: React.ReactNode;
}

export const CategoryPopover = ({ variant, children }: Props) => {
  const title = `${variant.slice(0, 1).toUpperCase()}${variant.slice(1)}`;

  return (
    <Popover className="flex">
      {({ open }) => (
        <>
          <CategoryPopoverTitleButton title={title} open={open} />
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-neutral-500">
              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
              {children}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
