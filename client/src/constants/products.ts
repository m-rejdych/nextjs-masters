import { CurrencyDollarIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline';
import type { Policy } from '@/types/products';

export const POLICIES: Policy[] = [
	{
		name: 'International delivery',
		Icon: GlobeAmericasIcon,
		description: 'Get your order in 2 years',
	},
	{ name: 'Loyalty rewards', Icon: CurrencyDollarIcon, description: "Don't look at other tees" },
] as const;
