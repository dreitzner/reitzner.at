import posts from './_posts.js';
import type { RequestHandler } from '.svelte-kit/types/src/routes/blog/[slug]';

export const get: RequestHandler = async (req) => {
	const { slug } = req.params;
	const post = posts.find(post => post.slug.endsWith(slug));
	if (post) {
		return {
			body: { post }
		};
	}
	return {
		status: 404,
		body: 'Slug not found'
	}
};