import { builder } from '@/schema/builder';

export enum ColorName {
	BLACK = 'BLACK',
	GRAY = 'GRAY',
}

builder.enumType(ColorName, {
	name: 'ColorName',
});

builder.prismaObject('Color', {
	fields: (t) => ({
		id: t.exposeID('id'),
		name: t.field({
			type: ColorName,
			resolve: (color) => color.name as ColorName,
		}),
	}),
});
