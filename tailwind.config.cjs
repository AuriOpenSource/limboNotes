module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	mode: 'jit',
	plugins: [require('daisyui'), require('@tailwindcss/typography')],
	daisyui: {
		themes: ['dark', 'light']
	}
};
