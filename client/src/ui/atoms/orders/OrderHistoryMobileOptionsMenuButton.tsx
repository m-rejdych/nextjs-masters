import { Menu } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import type { OrderListItemFragment } from '@/gql/graphql';

interface Props {
  id: OrderListItemFragment['id'];
}

export const OrderHistoryMobileOptionsMenuButton = ({ id }: Props) => (
  <div className="flex items-center">
    <Menu.Button className="-m-2 flex items-center p-2 text-neutral-400 hover:text-neutral-500">
      <span className="sr-only">Options for order {id}</span>
      <EllipsisVerticalIcon className="h-6 w-6" aria-hidden="true" />
    </Menu.Button>
  </div>
);
