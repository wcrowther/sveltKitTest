// import adapter from '@sveltejs/adapter-auto';
// import path from 'path';
// 
// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   kit: {
//     adapter: adapter(),
//     alias: {
//       '@components': path.resolve('src/lib/components'),
//       '@lib': path.resolve('src/lib'),
//       '@stores': path.resolve('src/stores')
//     }
//   }
// };
// 
// export default config;



// =======================================================================================
// ORIGINAL 
// =======================================================================================

import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
// =======================================================================================
