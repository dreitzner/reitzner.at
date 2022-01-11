import posts from './_posts.js';
import type { RequestHandler } from '@sveltejs/kit';

const internal = posts.map(post => {
	return {
		title: post.title,
		date: post.date,
		slug: post.slug
	};
});


const date2Number = (string: string) => (new Date(string)).getTime();

export const get: RequestHandler = async () => {
	// maybe cache them with cloudflare?
	const devTo = await fetch(
		'https://dev.to/api/articles?username=dreitzner',
		{
			headers: {
				'api-key': import.meta.env.VITE_DEVTO_API_KEY,
			}
		}
	)
	let devToJson = [];
	if(devTo.ok){
		devToJson = (await devTo.json()).map(article => {
			return {
				url: article.url,
				title: article.title,
				image: article.cover_image,
				date: article.created_at,
			}
		});
	}

	const body = [
		...internal,
		...devToJson,
	];

	body.sort((a, b) =>  date2Number(b.date) - date2Number(a.date));

	return {
		body: JSON.stringify(body),
	};
};