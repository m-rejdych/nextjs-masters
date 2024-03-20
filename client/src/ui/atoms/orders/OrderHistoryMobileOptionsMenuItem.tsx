import Link from 'next/link';
import type { Route } from 'next';
import { twMerge } from 'tailwind-merge';
import { Menu } from '@headlessui/react';

interface Props {
  href: Route;
  text: string;
}

export const OrderHistoryMobileOptionsMenuItem = ({ href, text }: Props) => (
  <Menu.Item>
    {({ active }) => (
      <Link
        href={href}
        className={twMerge(
          active ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-700',
          'block px-4 py-2 text-sm',
        )}
      >
        {text}
      </Link>
    )}
  </Menu.Item>
);
