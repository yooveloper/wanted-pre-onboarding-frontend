const { CracoAliasPlugin } = require('react-app-alias');

module.exports = {
	style: {
		postcss: {
			plugins: [require('tailwindcss'), require('autoprefixer')]
		}
	},
	plugins: [
		{
			plugin: CracoAliasPlugin,
			options: {
				source: 'tsconfig',
				baseUrl: './src',
				tsConfigPath: './tsconfig.paths.json'
			}
		}
	]
};
