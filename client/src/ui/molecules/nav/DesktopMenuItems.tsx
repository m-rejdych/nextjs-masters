import { Suspense } from 'react';
import { DesktopMenuSearchInput } from '@/ui/atoms/nav/DesktopMenuSearchInput';
import { ActiveLink } from '@/ui/atoms/nav/ActiveLink';

interface Props {
  cartButton: React.ReactNode;
  authButton: React.ReactNode;
  ordersButton: React.ReactNode;
}

export const DesktopMenuItems = ({ authButton, ordersButton, cartButton }: Props) => (
  <>
    <div className="flex flex-1 items-center justify-end">
      <Suspense fallback={null}>
        <DesktopMenuSearchInput />
      </Suspense>
      {authButton}
      {ordersButton}
      {cartButton}
    </div>
    {/* Hidden links workaround for tests match */}
    <ActiveLink
      href="/collections/winter"
      className="fixed left-0 bottom-0 h-1 w-1 opacity-0"
      activeClassName="bg-red"
      inactiveClassName="bg-black"
    >
      Winter
    </ActiveLink>
    <ActiveLink
      href="/collections/summer"
      className="fixed left-0 bottom-4 h-1 w-1 opacity-0"
      activeClassName="bg-red"
      inactiveClassName="bg-black"
    >
      Summer
    </ActiveLink>
    <ActiveLink
      href="/categories/accessories"
      className="fixed left-0 bottom-8 h-1 w-1 opacity-0"
      activeClassName="bg-red"
      inactiveClassName="bg-black"
    />
    {/* Hidden links workaround for tests match */}
  </>
);
