import { XMarkIcon } from '@heroicons/react/24/outline';

interface Props {
  onClose: () => void;
}

export const CartModalHeadingCloseButton = ({ onClose }: Props) => (
  <div className="ml-3 flex h-7 items-center">
    <button
      type="button"
      className="relative -m-2 p-2 text-neutral-400 hover:text-neutral-500"
      onClick={onClose}
    >
      <span className="absolute -inset-0.5" />
      <span className="sr-only">Close panel</span>
      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  </div>
);
