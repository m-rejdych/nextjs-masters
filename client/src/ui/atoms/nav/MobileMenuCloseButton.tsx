import { XMarkIcon } from '@heroicons/react/24/outline';

interface Props {
	onClose: () => void;
}

export const MobileMenuCloseButton = ({ onClose }: Props) => (
	<div className="flex px-4 pb-2 pt-5">
		<button
			type="button"
			className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-neutral-400"
			onClick={onClose}
		>
			<span className="sr-only">Close menu</span>
			<XMarkIcon className="h-6 w-6" aria-hidden="true" />
		</button>
	</div>
);
