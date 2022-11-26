// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
export default {
    extensions: ['.svelte', '.svx', '.md'],
	preprocess: [ 
        sveltePreprocess(),
        mdsvex({ extensions: ['.md', '.svx'] })
    ],
	kit: {
		adapter: adapter({ fallback: 'index.html' }),
		prerender: { entries: [] },
		alias: {
			'$/*': './src/'
		}
	}
};

