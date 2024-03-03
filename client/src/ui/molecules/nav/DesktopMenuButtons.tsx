import { DesktopMenuSearchButton } from '@/ui/atoms/nav/DesktopMenuSearchButton';
import { DesktopMenuCartButton } from '@/ui/atoms/nav/DesktopMenuCartButton';

export const DesktopMenuButtons = () => (
	<div className="flex flex-1 items-center justify-end">
		<DesktopMenuSearchButton />
		<DesktopMenuCartButton />
	</div>
);
