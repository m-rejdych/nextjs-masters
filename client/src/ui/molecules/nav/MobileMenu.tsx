import { Fragment, Suspense } from 'react';
import { Transition, Dialog, Tab } from '@headlessui/react';
import { MobileMenuCloseButton } from '@/ui/atoms/nav/MobileMenuCloseButton';
import { MobileMenuCategoryNameList } from '@/ui/molecules/nav/MobileMenuCategoryNameList';
import { MobileMenuPanels } from '@/ui/molecules/nav/MobileMenuPanels';
import { MobileMenuSearchInput } from '@/ui/atoms/nav/MobileMenuSearchInput';
import type { CategoryVariant } from '@/types/common';

interface Props {
  open: boolean;
  onClose: () => void;
  panelItems: CategoryVariant[];
}

export const MobileMenu = ({ open, onClose, panelItems }: Props) => (
  <Transition.Root show={open} as={Fragment}>
    <Dialog as="div" className="relative z-40 lg:hidden" onClose={onClose}>
      <Transition.Child
        as={Fragment}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </Transition.Child>
      <div className="fixed inset-0 z-40 flex">
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <MobileMenuCloseButton onClose={onClose} />
            <Suspense fallback={null}>
              <MobileMenuSearchInput />
            </Suspense>
            <Tab.Group as="div" className="mt-2">
              <div className="border-b border-neutral-200">
                <MobileMenuCategoryNameList />
              </div>
              <MobileMenuPanels panelItems={panelItems} onClose={onClose} />
            </Tab.Group>
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition.Root>
);
