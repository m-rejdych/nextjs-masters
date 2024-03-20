interface Props {
  title: string;
}

export const ProductsHeroHeading = ({ title }: Props) => (
  <div className="pb-16 sm:pb-24 text-center">
    <h1 className="text-4xl font-bold tracking-tight text-neutral-900">{title}</h1>
    <p className="mx-auto mt-4 max-w-3xl text-base text-neutral-500">
      Thoughtfully designed objects for the workspace, home, and travel.
    </p>
  </div>
);
