import { MobileMenuOpenButton } from '@/ui/atoms/nav/MobileMenuOpenButton';

interface Props {
	onOpen: () => void;
}

export const MobileMenuButtons = ({ onOpen }: Props) => (
	<div className="flex flex-1 items-center lg:hidden">
		<MobileMenuOpenButton onOpen={onOpen} />
	</div>
);
