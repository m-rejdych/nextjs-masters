import { Popover } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

interface Props {
  open: boolean;
  title: string;
}

export const CategoryPopoverTitleButton = ({ title, open }: Props) => (
  <div className="relative flex">
    <Popover.Button
      className={twMerge(
        open
          ? 'border-primary-600 text-primary-600'
          : 'border-transparent text-neutral-700 hover:text-neutral-800',
        'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out',
      )}
    >
      {title}
    </Popover.Button>
  </div>
);
