'use client';

import { useState } from 'react';
import { MobileMenu } from '@/ui/molecules/nav/MobileMenu';
import { DesktopCompanyLogo } from '@/ui/atoms/nav/DesktopCompanyLogo';
import { MobileCompanyLogo } from '@/ui/atoms/nav/MobileCompanyLogo';
import { MobileMenuItems } from '@/ui/molecules/nav/MobileMenuItems';
import { DesktopMenuItems } from '@/ui/molecules/nav/DesktopMenuItems';
import { FlyoutMenus } from '@/ui/molecules/nav/FlyoutMenus';
import type { CategoryVariant } from '@/types/common';

interface Props {
	flyoutMenusItems: CategoryVariant[];
	mobileMenuPanelItems: CategoryVariant[];
	desktopCartButton: React.ReactNode;
}

export const Nav = ({ flyoutMenusItems, mobileMenuPanelItems, desktopCartButton }: Props) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div className="bg-white">
			<MobileMenu
				open={mobileMenuOpen}
				onClose={() => setMobileMenuOpen(false)}
				panelItems={mobileMenuPanelItems}
			/>
			<header className="relative">
				<nav aria-label="Top">
					<div className="bg-white">
						<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
							<div className="border-b border-gray-200">
								<div className="flex h-16 items-center justify-between">
									<DesktopCompanyLogo />
									<FlyoutMenus items={flyoutMenusItems} />
									<MobileMenuItems onOpen={() => setMobileMenuOpen(true)} />
									<MobileCompanyLogo />
									<DesktopMenuItems cartButton={desktopCartButton} />
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
};
