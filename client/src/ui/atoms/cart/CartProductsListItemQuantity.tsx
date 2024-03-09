import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/20/solid';
import type { OrderItemFragment, OrderItemProductFragment } from '@/gql/graphql';

interface Props {
	id: OrderItemFragment['id'];
  quantity: OrderItemFragment['quantity'];
	name: OrderItemProductFragment['name'];
}

export const CartProductsListItemQuantity = ({ name, quantity }: Props) => (
	<div className="flex items-center">
		<p className="sr-only">
			Quantity, {name}
		</p>
    <p className="text-sm text-neutral-900">{quantity}</p>
		<div className="flex flex-col ml-2">
			<button className="w-5 h-5 p-0.5 m-0.5">
				<ArrowUpIcon className="text-neutral-400" />
			</button>
			<button className="w-5 h-5 p-0.5 m-0.5">
				<ArrowDownIcon className="text-neutral-400" />
			</button>
		</div>
	</div>
);
