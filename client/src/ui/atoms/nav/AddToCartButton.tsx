'use client';

import { useFormStatus } from 'react-dom';

export const AddToCartButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-8 py-3 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-primary-600"
      data-testid="add-to-cart-button"
    >
      Add to cart
    </button>
  );
};
