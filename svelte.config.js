// import adapter from '@sveltejs/adapter-auto';
import adapterVercel from '@sveltejs/adapter-vercel';
import adapterCloudflare from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: process.env.VERCEL_GIT_COMMIT_REF
			? adapterVercel({
				edge: true,
			})
			: adapterCloudflare()
	}
};

export default config;
