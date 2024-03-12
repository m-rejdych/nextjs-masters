export const ReviewFormTitleInput = () => (
	<div className="sm:col-span-4">
		<label htmlFor="title" className="block text-sm font-medium leading-6 text-neutral-900">
			Title
		</label>
		<div className="mt-2">
			<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-neutral-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-600 sm:max-w-md">
				<input
					type="text"
					name="title"
					id="title"
					className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-neutral-900 placeholder:text-neutral-400 focus:ring-0 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
	</div>
);
