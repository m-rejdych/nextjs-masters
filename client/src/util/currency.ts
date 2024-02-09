export const formatDolars = (amount: number) =>
	Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
