import { Montserrat } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { twMerge } from 'tailwind-merge';
import type { Metadata } from 'next';
import './globals.css';
import { Nav } from '@/ui/organisms/Nav';
import { Footer } from '@/ui/molecules/nav/Footer';
import { CategoryPopoverList } from '@/ui/molecules/nav/CategoryPopoverList';
import { MobileMenuPanelsCategoryList } from '@/ui/molecules/nav/MobileMenuPanelsCategoryList';
import { DesktopMenuCartButton } from '@/ui/atoms/nav/DesktopMenuCartButton';
import { DesktopMenuAuthButton } from '@/ui/atoms/nav/DesktopMenuAuthButton';
import { DesktopMenuOrdersButton } from '@/ui/atoms/nav/DesktopMenuOrdersButton';
import type { CategoryVariant } from '@/types/common';

interface Props {
  children: React.ReactNode;
  modal: React.ReactNode;
}

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'NextJS Masters',
  description: 'NextJS Masters course project',
};

export default function RootLayout({ children, modal }: Props) {
  const flyoutMenusItems: CategoryVariant[] = [
    { variant: 'categories', node: <CategoryPopoverList variant="categories" /> },
    { variant: 'collections', node: <CategoryPopoverList variant="collections" /> },
  ];
  const mobileMenuPanelItems: CategoryVariant[] = [
    { variant: 'categories', node: <MobileMenuPanelsCategoryList variant="categories" /> },
    { variant: 'collections', node: <MobileMenuPanelsCategoryList variant="collections" /> },
  ];

  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: '#4D3DF7', colorText: '#243B53' } }}>
      <html lang="en" className={twMerge('h-full bg-neutral-50', montserrat.variable)}>
        <body>
          <Nav
            flyoutMenusItems={flyoutMenusItems}
            mobileMenuPanelItems={mobileMenuPanelItems}
            desktopCartButton={<DesktopMenuCartButton />}
            desktopAuthButton={<DesktopMenuAuthButton />}
            desktopOrdersButton={<DesktopMenuOrdersButton />}
          />
          <div className="mx-auto h-full max-w-7xl px-4 py-32 sm:px-6 sm:py-40 lg:px-8">
            {children}
          </div>
          <Footer />
          {modal}
        </body>
      </html>
    </ClerkProvider>
  );
}
