import Link from 'next/link';
import Image from 'next/image';

export const DesktopCompanyLogo = () => (
  <div className="hidden lg:flex lg:flex-1 lg:items-center">
    <Link href="/">
      <span className="sr-only">Your Company</span>
      <Image
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="company-logo"
        width={40}
        height={40}
      />
    </Link>
  </div>
);
