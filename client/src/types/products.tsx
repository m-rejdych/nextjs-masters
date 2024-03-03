import type { ComponentType } from 'react';

export interface Policy {
	name: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	Icon: ComponentType<any>;
	description: string;
}
