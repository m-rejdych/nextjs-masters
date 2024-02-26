import { RadioGroup } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';
import type { ExtendedProduct } from '@/types/products';

type Color = ExtendedProduct['colors'][number];

interface Props {
	color: Color;
}

export const ColorPickerOption = ({ color }: Props) => {
	const selectedColorVariants: Record<Color['name'], string> = {
		BLACK: 'ring-gray-900',
		GRAY: 'ring-gray-400',
	};

	const bgColorVariants: Record<Color['name'], string> = {
		BLACK: 'bg-gray-900',
		GRAY: 'bg-gray-400',
	};

	return (
		<RadioGroup.Option
			value={color.name}
			className={({ active, checked }) =>
				twMerge(
					selectedColorVariants[color.name],
					active && checked ? 'ring ring-offset-1' : '',
					!active && checked ? 'ring-2' : '',
					'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none',
				)
			}
		>
			<RadioGroup.Label as="span" className="sr-only">
				{color.name}
			</RadioGroup.Label>
			<span
				aria-hidden="true"
				className={twMerge(
					bgColorVariants[color.name],
					'h-8 w-8 rounded-full border border-black border-opacity-10',
				)}
			/>
		</RadioGroup.Option>
	);
};
