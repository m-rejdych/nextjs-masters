import Link from 'next/link';
import Image from 'next/image';

export const MobileCompanyLogo = () => (
	<Link href="/" className="lg:hidden">
		<span className="sr-only">Your Company</span>
		<Image
			src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
			alt="company-logo"
			className="h-8 w-auto"
			width={40}
			height={40}
		/>
	</Link>
);
