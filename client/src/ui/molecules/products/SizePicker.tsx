'use client';

import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { SizePickerOption } from '@/ui/atoms/products/SizePickerOption';
import type { ExtendedProduct } from '@/types/products';

interface Props {
	sizes: ExtendedProduct['sizes'];
}

export const SizePicker = ({ sizes }: Props) => {
	const [selectedSize, setSelectedSize] = useState(sizes.filter(({ inStock }) => inStock)[0]?.id ?? null);

	return (
		<div className="mt-8">
			<div className="flex items-center justify-between">
				<h2 className="text-sm font-medium text-gray-900">Size</h2>
				<a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-500">
					See sizing chart
				</a>
			</div>
			<RadioGroup value={selectedSize} onChange={(val) => setSelectedSize(val)} className="mt-2">
				<RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
				<div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
					{sizes.map((size) => (
						<SizePickerOption key={size.id} size={size} />
					))}
				</div>
			</RadioGroup>
		</div>
	);
};
