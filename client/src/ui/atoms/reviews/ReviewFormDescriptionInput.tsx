export const ReviewFormDescriptionInput = () => (
  <div className="col-span-full">
    <label htmlFor="content" className="block text-sm font-medium leading-6 text-neutral-900">
      Description
    </label>
    <div className="mt-2">
      <textarea
        id="content"
        name="content"
        rows={3}
        className="block w-full rounded-md border-0 px-3 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
      />
    </div>
    <p className="mt-3 text-sm leading-6 text-neutral-600">
      Write a few sentences about the product.
    </p>
  </div>
);
