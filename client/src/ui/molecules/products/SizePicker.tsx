'use client';

import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { SizePickerOption } from '@/ui/atoms/products/SizePickerOption';
import type { ProductFragment } from '@/gql/graphql';

interface Props {
  sizes: ProductFragment['sizes'];
}

export const SizePicker = ({ sizes }: Props) => {
  const [selectedSize, setSelectedSize] = useState(
    sizes.filter(({ inStock }) => inStock)[0]?.size.id ?? null,
  );

  return (
    <div className="mt-8">
      <h2 className="text-sm font-medium text-neutral-900">Size</h2>
      <RadioGroup
        name="sizeId"
        value={selectedSize}
        onChange={(val) => setSelectedSize(val)}
        className="mt-2"
      >
        <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {sizes.map((size) => (
            <SizePickerOption key={size.size.id} size={size} />
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};
