module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
	},
	extends: [
		'@nuxt/eslint-config',
		'@vue/eslint-config-prettier/skip-formatting',
	],
	rules: {
		'no-console': 'off',
		'no-undef': 'off',
	},
};
