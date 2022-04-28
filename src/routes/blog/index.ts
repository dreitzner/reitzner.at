import posts from './_posts';
import devTo from './_devTo';

import type { RequestHandler } from '.svelte-kit/types/src/routes/blog/index';

const internal = posts.map(post => {
	return {
		title: post.title,
		date: post.date,
		slug: post.slug
	};
});


const date2Number = (string: string) => (new Date(string)).getTime();

export const get: RequestHandler = () => {
	const posts = [
		...internal,
		...devTo,
	];

	posts.sort((a, b) => date2Number(b.date) - date2Number(a.date));

	return {
		body: { posts },
	};
};