import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export const MobileMenuSearchButton = () => (
	<Link href="/" className="ml-2 p-2 text-neutral-400 hover:text-neutral-500">
		<span className="sr-only">Search</span>
		<MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
	</Link>
);
