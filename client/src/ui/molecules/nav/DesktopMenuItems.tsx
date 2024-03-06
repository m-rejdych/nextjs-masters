import { Suspense } from 'react';
import { DesktopMenuSearchInput } from '@/ui/atoms/nav/DesktopMenuSearchInput';
import { DesktopMenuCartButton } from '@/ui/atoms/nav/DesktopMenuCartButton';

export const DesktopMenuItems = () => (
	<div className="flex flex-1 items-center justify-end">
    <Suspense fallback={null}>
      <DesktopMenuSearchInput />
    </Suspense>
		<DesktopMenuCartButton />
	</div>
);
