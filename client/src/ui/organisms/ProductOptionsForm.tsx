import { ColorPicker } from '@/ui/molecules/products/ColorPicker';
import { SizePicker } from '@/ui/molecules/products/SizePicker';

import type { ExtendedProduct } from '@/types/products';

interface Props {
	colors: ExtendedProduct['colors'];
	sizes: ExtendedProduct['sizes'];
}

export const ProductOptionsForm = ({ colors, sizes }: Props) => (
	<form>
		<ColorPicker colors={colors} />
		<SizePicker sizes={sizes} />
		<button
			type="submit"
			className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-8 py-3 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
		>
			Add to cart
		</button>
	</form>
);
