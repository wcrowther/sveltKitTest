
import adapter 				from '@sveltejs/adapter-auto';
import { vitePreprocess } 	from '@sveltejs/vite-plugin-svelte';
import path 				from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
		  '@components': 	path.resolve('src/lib/components'),
		  '@lib': 			path.resolve('src/lib'),
		  '@stores': 		path.resolve('src/stores'),
		  '@src': 			path.resolve('src')
		}
	},
	preprocess: vitePreprocess()
};

export default config;
