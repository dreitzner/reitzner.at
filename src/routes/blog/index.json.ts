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
	let devToJson = [];
	try {
		// maybe cache them with cloudflare?
		const devTo = await fetch(
			'https://dev.to/api/articles?username=dreitzner',
			{
				headers: {
					'api-key': import.meta.env.VITE_DEVTO_API_KEY,
				}
			}
		)
		console.log('DevTo Request:', devTo.ok)
		if(devTo.ok){
			devToJson = (await devTo.json()).map(article => {
				return {
					url: article.url,
					title: article.title,
					image: article.cover_image,
					date: article.created_at,
				}
			});
		} else {
			devToJson.push({
				url: devTo.ok,
				title: devTo.ok,
				image: devTo.ok,
				date: devTo.ok,
				data: devTo,
			}) 
		}
	} catch (err) {
		console.error(err);
		devToJson.push({
			url: 'error',
			title: 'error',
			image: 'error',
			date: 'error',
			data: err,
		})
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