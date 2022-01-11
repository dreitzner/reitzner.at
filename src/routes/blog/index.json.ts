import posts from './_posts.js';
import type { RequestHandler } from '@sveltejs/kit';

const body = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		date: post.date,
		slug: post.slug
	};
}));


export const get: RequestHandler = async () => {
	return {
		body,
	};
};