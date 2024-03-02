'use client';

import { useState } from 'react';
import { MobileMenu } from '@/ui/molecules/nav/MobileMenu';
import { DesktopCompanyLogo } from '@/ui/atoms/nav/DesktopCompanyLogo';
import { MobileCompanyLogo } from '@/ui/atoms/nav/MobileCompanyLogo';
import { MobileMenuButtons } from '@/ui/molecules/nav/MobileMenuButtons';
import { DesktopMenuButtons } from '@/ui/molecules/nav/DesktopMenuButtons';
import { FlyoutMenus } from '@/ui/molecules/nav/FlyoutMenus';
import type { CategoryVariant } from '@/types/common';

interface Props {
	flyoutMenusItems: CategoryVariant[];
	mobileMenuPanelItems: CategoryVariant[];
}

export const Nav = ({ flyoutMenusItems, mobileMenuPanelItems }: Props) => {
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
									<MobileMenuButtons onOpen={() => setMobileMenuOpen(true)} />
									<MobileCompanyLogo />
									<DesktopMenuButtons />
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
};
