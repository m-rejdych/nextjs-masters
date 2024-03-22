import Link from 'next/link';
import Image from 'next/image';

export const DesktopCompanyLogo = () => (
  <div className="mr-4 hidden items-center lg:flex">
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
