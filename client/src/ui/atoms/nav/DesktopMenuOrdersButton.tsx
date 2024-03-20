import Link from 'next/link';
import { auth } from '@clerk/nextjs';
import { CircleStackIcon } from '@heroicons/react/24/outline';

export const DesktopMenuOrdersButton = () => {
  const { userId } = auth();

  return (
    userId && (
      <div className="ml-4 flow-root lg:ml-8">
        <Link href="/orders" className="group -m-2 flex items-center p-2" scroll={false}>
          <CircleStackIcon
            className="h-6 w-6 flex-shrink-0 text-neutral-400 group-hover:text-neutral-500"
            aria-hidden="true"
          />
          <span className="sr-only">items in cart, view bag</span>
        </Link>
      </div>
    )
  );
};
