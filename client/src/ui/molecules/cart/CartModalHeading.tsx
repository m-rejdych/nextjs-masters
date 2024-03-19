import { CartModalHeadingTitle } from '@/ui/atoms/cart/CartModalHeadingTitle';
import { CartModalHeadingCloseButton } from '@/ui/atoms/cart/CartModalHeadingCloseButton';

interface Props {
  onClose: () => void;
}

export const CartModalHeading = ({ onClose }: Props) => (
  <div className="flex items-start justify-between">
    <CartModalHeadingTitle />
    <CartModalHeadingCloseButton onClose={onClose} />
  </div>
);
