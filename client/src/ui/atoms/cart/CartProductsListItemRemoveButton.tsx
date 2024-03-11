'use client';

import { useFormStatus } from 'react-dom';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { handleOrderItemRemoveAction } from '@/actions/orderItem';
import type { OrderItemFragment } from '@/gql/graphql';

interface Props {
	id: OrderItemFragment['id'];
}

export const CartProductsListItemRemoveButton = ({ id }: Props) => {
	const { pending } = useFormStatus();

	const handleAction = async () => {
		await handleOrderItemRemoveAction(id);
	};

	return (
		<button
			type="submit"
			formAction={handleAction}
			disabled={pending}
			className="-m-2 inline-flex p-2 text-neutral-400 hover:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:text-neutral-400"
		>
			<span className="sr-only">Remove</span>
			<XMarkIcon className="h-5 w-5" aria-hidden="true" />
		</button>
	);
};
