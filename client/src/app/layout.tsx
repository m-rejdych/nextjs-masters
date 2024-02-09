import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
		<html lang="en" className="bg-neutral-050">
			<body className={inter.className}>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
			</body>
		</html>
	);
}
