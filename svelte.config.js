import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import viteCompression from 'vite-plugin-compression';
import removeConsole from 'vite-plugin-remove-console';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		version: {
			name: Date.now().toString().slice(0, 3)
		},
		vite: {
			build: {
				reportCompressedSize: false,
				target: "esnext",
				minify: "terser",
			},
			plugins: [
				removeConsole(),
				viteCompression({
					algorithm: "brotliCompress",
					threshold: 512,
					compressionOptions: {
						level: 3,
					},
				})
			]
		},
		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
