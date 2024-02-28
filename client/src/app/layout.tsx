import { Montserrat } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import type { Metadata } from 'next';
import './globals.css';

import { Nav } from '@/ui/organisms/Nav';

const montserrat = Montserrat({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-montserrat',
});

export const metadata: Metadata = {
	title: 'NextJS Masters',
	description: 'NextJS Masters course project',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={twMerge('bg-neutral-50', montserrat.variable)}>
			<body>
				<Nav />
				<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">{children}</div>
			</body>
		</html>
	);
}
