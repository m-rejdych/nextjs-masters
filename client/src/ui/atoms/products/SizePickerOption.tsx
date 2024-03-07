import { RadioGroup } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';
import type { ProductFragment } from '@/gql/graphql';

interface Props {
	size: ProductFragment['sizes'][number];
}

export const SizePickerOption = ({ size: { inStock, size } }: Props) => (
	<RadioGroup.Option
		value={size.id}
		className={({ active, checked }) =>
			twMerge(
				inStock ? 'cursor-pointer focus:outline-none' : 'cursor-not-allowed opacity-25',
				active ? 'ring-2 ring-primary-500 ring-offset-2' : '',
				checked
					? 'border-transparent bg-primary-600 text-white hover:bg-primary-700'
					: 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50',
				'flex items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase sm:flex-1',
			)
		}
		disabled={!inStock}
	>
		<RadioGroup.Label as="span">{size.type}</RadioGroup.Label>
	</RadioGroup.Option>
);
