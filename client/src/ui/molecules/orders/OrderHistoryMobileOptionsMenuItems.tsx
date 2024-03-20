import { forwardRef, type ForwardedRef } from 'react';
import type { Route } from 'next';
import { Menu } from '@headlessui/react';
import { OrderHistoryMobileOptionsMenuItem } from '@/ui/atoms/orders/OrderHistoryMobileOptionsMenuItem';
import type { OrderListItemFragment } from '@/gql/graphql';

interface Props {
  id: OrderListItemFragment['id'];
}

// eslint-disable-next-line react/display-name
export const OrderHistoryMobileOptionsMenuItems = forwardRef(
  ({ id }: Props, ref: ForwardedRef<HTMLDivElement>) => (
    <Menu.Items
      ref={ref}
      className="absolute right-0 z-10 mt-2 w-40 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
    >
      <div className="py-1">
        <OrderHistoryMobileOptionsMenuItem text="View" href={`/order/${id}` as Route} />
        <OrderHistoryMobileOptionsMenuItem text="Invoice" href="#" />
      </div>
    </Menu.Items>
  ),
);
