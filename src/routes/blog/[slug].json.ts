import posts from './_posts.js';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async (req) => {
	const { slug } = req.params;
	const post = posts.find(post => post.slug === slug);
	if (post)
	{
		return {
			body: JSON.stringify(post)
		};
	}
	return {
		status: 404,
		body: 'Slug not found'
	}
};