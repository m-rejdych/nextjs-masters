import { useRef, useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export const DesktopMenuSearchInput = () => {
	const [query, setQuery] = useState('');
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const searchParams = useSearchParams();
	const router = useRouter();

	const queryParam = searchParams.get('query');

	useEffect(() => {
		setQuery(queryParam ?? '');
	}, [queryParam]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);

		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => {
			timeoutRef.current = null;
			router.push(`/search?query=${e.target.value}`);
		}, 500);
	};

	return (
		<div className="hidden flex-1 items-center justify-center px-2 lg:ml-6 lg:flex lg:justify-end">
			<div className="w-full max-w-xs">
				<label htmlFor="search" className="sr-only">
					Search
				</label>
				<div className="relative">
					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<MagnifyingGlassIcon className="h-5 w-5 text-neutral-400" aria-hidden="true" />
					</div>
					<input
						id="search"
						name="search"
						className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-neutral-900 ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
						placeholder="Search"
						type="search"
						onChange={handleChange}
						value={query}
					/>
				</div>
			</div>
		</div>
	);
};
