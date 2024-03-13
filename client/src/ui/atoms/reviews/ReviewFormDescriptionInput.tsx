export const ReviewFormDescriptionInput = () => (
	<div className="col-span-full">
		<label htmlFor="description" className="block text-sm font-medium leading-6 text-neutral-900">
			Description
		</label>
		<div className="mt-2">
			<textarea
				id="description"
				name="description"
				rows={3}
				className="block w-full px-3 rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
			/>
		</div>
		<p className="mt-3 text-sm leading-6 text-neutral-600">
			Write a few sentences about the product.
		</p>
	</div>
);
