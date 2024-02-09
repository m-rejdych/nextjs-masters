import colors from 'tailwindcss/colors';
import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/ui/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			...colors,
			primary: {
				'050': '#E6E6FF',
				'100': '#C4C6FF',
				'200': '#A2A5FC',
				'300': '#8888FC',
				'400': '#7069FA',
				'500': '#5D55FA',
				'600': '#4D3DF7',
				'700': '#3525E6',
				'800': '#1D0EBE',
				'900': '#0C008C',
				light: '#C4C6FF',
				main: '#7069FA',
				dark: '#1D0EBE',
			},
			secondary: {
				'050': '#EFFCF6',
				'100': '#C6F7E2',
				'200': '#8EEDC7',
				'300': '#65D6AD',
				'400': '#3EBD93',
				'500': '#27AB83',
				'600': '#199473',
				'700': '#147D64',
				'800': '#0C6B58',
				'900': '#014D40',
				light: '#C6F7E2',
				main: '#3EBD93',
				dark: '#0C6B58',
			},
			neutral: {
				'050': '#F0F4F8',
				'100': '#D9E2EC',
				'200': '#BCCCDC',
				'300': '#9FB3C8',
				'400': '#829AB1',
				'500': '#627D98',
				'600': '#486581',
				'700': '#334E68',
				'800': '#243B53',
				'900': '#102A43',
				light: '#D9E2EC',
				main: '#829AB1',
				dark: '#243B53',
			},
			accent: {
				'050': '#FFE3E3',
				'100': '#FFBDBD',
				'200': '#FF9B9B',
				'300': '#F86A6A',
				'400': '#EF4E4E',
				'500': '#E12D39',
				'600': '#CF1124',
				'700': '#AB091E',
				'800': '#8A041A',
				'900': '#610316',
				light: '#FFBDBD',
				main: '#EF4E4E',
				dark: '#8A041A',
			},
		},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
};

export default config;
