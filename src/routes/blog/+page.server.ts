import posts from './_posts';
import devTo from './_devTo';

import type { PageServerLoad } from './$types';

const internal = posts.map(post => {
	return {
		title: post.title,
		date: post.date,
		slug: post.slug
	};
});


const date2Number = (string: string) => (new Date(string)).getTime();

export const load: PageServerLoad = () => {
	const posts = [
		...internal,
		...devTo,
	];

	posts.sort((a, b) => date2Number(b.date) - date2Number(a.date));

	return { posts };
};