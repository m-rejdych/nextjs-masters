import { Bars3Icon } from '@heroicons/react/24/outline';

interface Props {
  onOpen: () => void;
}

export const MobileMenuOpenButton = ({ onOpen }: Props) => (
  <button type="button" className="-ml-2 rounded-md bg-white p-2 text-neutral-400" onClick={onOpen}>
    <span className="sr-only">Open menu</span>
    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
  </button>
);
