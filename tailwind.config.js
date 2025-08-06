module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				cream: '#FDF7F4',
				herb: '#8EB486',
				mocha: '#997C70',
				cocoa: '#685752',
			},
			fontFamily: {
				sans: ['var(--font-noto)', 'sans-serif'],
				heading: ['var(--font-playfair)', 'serif'],
			},
		},
	},
	plugins: [],
};