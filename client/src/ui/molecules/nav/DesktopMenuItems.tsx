import { Suspense } from 'react';
import { DesktopMenuSearchInput } from '@/ui/atoms/nav/DesktopMenuSearchInput';

interface Props {
	cartButton: React.ReactNode;
}

export const DesktopMenuItems = ({ cartButton }: Props) => (
	<div className="flex flex-1 items-center justify-end">
		<Suspense fallback={null}>
			<DesktopMenuSearchInput />
		</Suspense>
		{cartButton}
	</div>
);
