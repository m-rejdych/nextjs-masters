'use client';

import { Fragment, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Dialog, Transition } from '@headlessui/react';
import { CartModalHeading } from '@/ui/molecules/cart/CartModalHeading';

interface Props {
  checkoutSection: React.ReactNode;
  productsList: React.ReactNode;
}

export const CartModal = ({ checkoutSection, productsList }: Props) => {
  const [open, setOpen] = useState(true);
  const [backOnLeave, setBackOnLeave] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname.includes('/cart')) setOpen(false);
    else setOpen(true);
  }, [pathname]);

  const handleClose = (): void => {
    setOpen(false);
    setBackOnLeave(true);
  };

  const handleAfterLeave = (): void => {
    if (!backOnLeave) return;
    router.back();
    setBackOnLeave(false);
  };

  return (
    <Transition.Root show={open} appear as={Fragment} afterLeave={handleAfterLeave}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-neutral-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <CartModalHeading onClose={handleClose} />
                      <div className="mt-8">
                        <div className="flow-root">{productsList}</div>
                      </div>
                    </div>
                    {checkoutSection}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
