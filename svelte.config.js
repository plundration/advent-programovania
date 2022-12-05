import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

import adapterNode from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
export default {
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [
		sveltePreprocess(),
		mdsvex({ extensions: ['.md', '.svx'] })
	],
	kit: {
		adapter: adapterNode({ out: 'build' }),
		alias: {
			'$/*': './src/'
		}
	}
};
