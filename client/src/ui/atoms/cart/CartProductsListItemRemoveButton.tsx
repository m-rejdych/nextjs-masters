import { XMarkIcon } from '@heroicons/react/20/solid';

export const CartProductsListItemRemoveButton = () => (
	<div className="absolute right-0 top-0">
		<button type="button" className="-m-2 inline-flex p-2 text-neutral-400 hover:text-neutral-500">
			<span className="sr-only">Remove</span>
			<XMarkIcon className="h-5 w-5" aria-hidden="true" />
		</button>
	</div>
);
