const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			'xs': '320px',
			...defaultTheme.screens,
		},
		colors: {
			'black': '#1d2722',
			'white': '#ffffff',
			'green': '#9EC06C',
			'green-dark': '#39590B',
			'red': '#4e3b45',
			'yellow': '#dba507',
			'yellow-dark': '#b58c0a',
			'background': '#F2F0E6',
			'border': '#DAD5BE',
		},
		extend: {},
	},
	plugins: [require('@shrutibalasa/tailwind-grid-auto-fit')],
}
