'use client';

import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { ColorPickerOption } from '@/ui/atoms/products/ColorPickerOption';
import type { ProductFragment } from '@/gql/graphql';

interface Props {
  colors: ProductFragment['colors'];
}

export const ColorPicker = ({ colors }: Props) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]?.color.id ?? null);

  return (
    <div>
      <h2 className="text-sm font-medium text-neutral-900">Color</h2>
      <RadioGroup
        name="colorId"
        value={selectedColor}
        onChange={(val) => setSelectedColor(val)}
        className="mt-2"
      >
        <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
        <div className="flex items-center space-x-3">
          {colors.map((color) => (
            <ColorPickerOption key={color.color.name} color={color} />
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};
