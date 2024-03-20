'use client';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { OrderHistoryMobileOptionsMenuButton } from '@/ui/atoms/orders/OrderHistoryMobileOptionsMenuButton';
import { OrderHistoryMobileOptionsMenuItems } from '@/ui/molecules/orders/OrderHistoryMobileOptionsMenuItems';
import type { OrderListItemFragment } from '@/gql/graphql';

interface Props {
  id: OrderListItemFragment['id'];
}

export const OrderHistoryMobileOptionsMenu = ({ id }: Props) => (
  <Menu as="div" className="relative flex justify-end lg:hidden">
    <OrderHistoryMobileOptionsMenuButton id={id} />
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <OrderHistoryMobileOptionsMenuItems id={id} />
    </Transition>
  </Menu>
);
