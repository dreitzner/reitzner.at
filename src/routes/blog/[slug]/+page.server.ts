import posts from '$lib/data/_posts.js';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params: { slug } }) => {
	const post = posts.find(post => post.slug.endsWith(slug));
	if (post) {
		return { post };
	}

	throw error(404, 'Slug not found')
};