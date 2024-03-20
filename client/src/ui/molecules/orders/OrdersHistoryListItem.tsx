import { OrderHistoryDesktopOptions } from './OrderHistoryDesktopOptions';
import { OrdersHistoryListItemHeading } from '@/ui/atoms/orders/OrderHistoryListItemHeading';
import { OrderHistoryListItemInfo } from '@/ui/atoms/orders/OrderHistoryListItemInfo';
import { OrderHistoryMobileOptionsMenu } from '@/ui/molecules/orders/OrderHistoryMobileOptionsMenu';
import { OrderHistoryListItemProductsList } from '@/ui/molecules/orders/OrderHistoryListItemProductsList';
import type { OrderListItemFragment } from '@/gql/graphql';

export const OrdersHistoryListItem = ({ id, total, createdAt, items }: OrderListItemFragment) => (
  <li className="border-b border-t border-neutral-200 bg-white shadow-sm sm:rounded-lg sm:border">
    <OrdersHistoryListItemHeading createdAt={createdAt} />
    <div className="flex items-center border-b border-neutral-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6">
      <OrderHistoryListItemInfo id={id} total={total} createdAt={createdAt} />
      <OrderHistoryMobileOptionsMenu id={id} />
      <OrderHistoryDesktopOptions id={id} />
    </div>
    <h4 className="sr-only">Items</h4>
    <OrderHistoryListItemProductsList items={items} />
  </li>
);
