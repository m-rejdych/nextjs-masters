'use client';

import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { ColorPickerOption } from '@/ui/atoms/products/ColorPickerOption';
import type { ExtendedProduct } from '@/types/products';

interface Props {
	colors: ExtendedProduct['colors'];
}

export const ColorPicker = ({ colors }: Props) => {
	const [selectedColor, setSelectedColor] = useState(colors[0]?.name ?? null);

	return (
		<div>
			<h2 className="text-sm font-medium text-gray-900">Color</h2>
			<RadioGroup value={selectedColor} onChange={(val) => setSelectedColor(val)} className="mt-2">
				<RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
				<div className="flex items-center space-x-3">
					{colors.map((color) => (
						<ColorPickerOption key={color.name} color={color} />
					))}
				</div>
			</RadioGroup>
		</div>
	);
};
