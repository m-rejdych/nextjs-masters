export const capitalize = (str: string) =>
	str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();

export const removeUnderscores = (str: string) => str.replaceAll('_', ' ');

export const removeDashes = (str: string) => str.replaceAll('-', ' ');
