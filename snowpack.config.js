/** @type { import('snowpack').SnowpackUserConfig } */
module.exports = {
	mount: {
		public: '/',
		src: '/dist',
	},
	plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-typescript'],
	packageOptions: {
		knownEntrypoints: ['react', 'react-dom'],
	},
	optimize: {
		bundle: true,
		minify: true,
		sourcemap: false,
		treeshake: true,
	},
};
