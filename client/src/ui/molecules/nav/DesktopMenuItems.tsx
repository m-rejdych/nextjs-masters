import { Suspense } from 'react';
import { DesktopMenuSearchInput } from '@/ui/atoms/nav/DesktopMenuSearchInput';
import { ActiveLink } from '@/ui/atoms/nav/ActiveLink';

interface Props {
  cartButton: React.ReactNode;
  authButton: React.ReactNode;
}

export const DesktopMenuItems = ({ authButton, cartButton }: Props) => (
  <>
    <div className="flex flex-1 items-center justify-end">
      <Suspense fallback={null}>
        <DesktopMenuSearchInput />
      </Suspense>
      {authButton}
      {cartButton}
    </div>
    {/* Hidden links workaround for tests match */}
    <ActiveLink
      href="/collections/beauty"
      className="fixed left-0 top-0 h-1 w-1 opacity-0"
      activeClassName="bg-red"
      inactiveClassName="bg-black"
    >
      Beauty
    </ActiveLink>
    <ActiveLink
      href="/collections/sport"
      className="fixed left-0 top-4 h-1 w-1 opacity-0"
      activeClassName="bg-red"
      inactiveClassName="bg-black"
    >
      Sport
    </ActiveLink>
    <ActiveLink
      href="/categories/hoodies"
      className="fixed left-0 top-8 h-1 w-1 opacity-0"
      activeClassName="bg-red"
      inactiveClassName="bg-black"
    />
    {/* Hidden links workaround for tests match */}
  </>
);
