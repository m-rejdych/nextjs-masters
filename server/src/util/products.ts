import { decodeGlobalID } from '@pothos/plugin-relay';
import type { ProductWhereInput } from '@/schema/models/Product';

export const decodeProductWhereId = (input: ProductWhereInput): ProductWhereInput => {
	const inputCopy = { ...input };

	if (inputCopy.id) {
		inputCopy.id = decodeGlobalID(inputCopy.id as string).id;
	}

	if (inputCopy.AND) {
		if (Array.isArray(inputCopy.AND)) {
			const inputAndCopy = [...inputCopy.AND];
			inputCopy.AND = inputAndCopy.map(decodeProductWhereId);
		} else {
			const inputAndCopy = { ...inputCopy.AND };
			input.AND = decodeProductWhereId(inputAndCopy);
		}
	}

	if (inputCopy.NOT) {
		if (Array.isArray(inputCopy.NOT)) {
			const inputNotCopy = [...inputCopy.NOT];
			inputCopy.NOT = inputNotCopy.map(decodeProductWhereId);
		} else {
			const inputNotCopy = { ...inputCopy.NOT };
			inputCopy.NOT = decodeProductWhereId(inputNotCopy);
		}
	}

	return inputCopy;
};
