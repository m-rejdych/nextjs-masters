import { MobileMenuOpenButton } from '@/ui/atoms/nav/MobileMenuOpenButton';
import { MobileMenuSearchButton } from '@/ui/atoms/nav/MobileMenuSearchButton';

interface Props {
	onOpen: () => void;
}

export const MobileMenuButtons = ({ onOpen }: Props) => (
	<div className="flex flex-1 items-center lg:hidden">
		<MobileMenuOpenButton onOpen={onOpen} />
		<MobileMenuSearchButton />
	</div>
);
