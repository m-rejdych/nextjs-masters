import { CartModal } from "@/ui/organisms/CartModal";
import { CartModalCheckoutSection } from "@/ui/molecules/cart/CartModalCheckoutSection";
import { CartModalProductsList } from "@/ui/molecules/cart/CartModalProductsList";

export default function CartModalPage() {
  return (
    <CartModal productsList={<CartModalProductsList />} checkoutSection={<CartModalCheckoutSection />} />
  );
}
