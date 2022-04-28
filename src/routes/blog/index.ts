import posts from './_posts';
import devTo from './_devTo';

const internal = posts.map(post => {
	return {
		title: post.title,
		date: post.date,
		slug: post.slug
	};
});


const date2Number = (string: string) => (new Date(string)).getTime();
/** @type {import('./routes/blog/index').RequestHandler} */
export function get() {
	const posts = [
		...internal,
		...devTo,
	];

	posts.sort((a, b) => date2Number(b.date) - date2Number(a.date));

	return {
		body: { posts },
	};
};