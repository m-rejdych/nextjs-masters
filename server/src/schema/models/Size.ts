import { builder } from '@/schema/builder';

export enum SizeType {
	S = 'S',
	M = 'M',
	L = 'L',
	XL = 'XL',
}

builder.enumType(SizeType, {
	name: 'SizeType',
});

builder.prismaObject('Size', {
	fields: (t) => ({
		id: t.exposeID('id'),
		type: t.field({
			type: SizeType,
			resolve: (size) => size.type as SizeType,
		}),
    inStock: t.exposeBoolean('inStock'),
		product: t.relation('product'),
	}),
});
