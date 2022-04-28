import 'dotenv/config';
import { writeFile } from 'fs/promises';
import path from 'path';

import { fetch } from '@sveltejs/kit/install-fetch';

/**
 * writeToPosts
 * @param {string} name config name
 * @param {string} data date written to the file
 */
const writeToPosts = async (name, data) => {
	try {
		const filePath = path.resolve(`./src/routes/blog/_${name}.ts`);
		return await writeFile(filePath, data);
	} catch (error) {
		console.error(error);
		return Promise.reject();
	}
};

const getDevToPosts = async () => {
	try {
		// maybe cache them with cloudflare?
		const devTo = await fetch('https://dev.to/api/articles?username=dreitzner', {
			headers: {
				'api-key': `${process.env.VITE_DEVTO_API_KEY}`
			}
		});
		if (devTo.ok) {
			const json = await devTo.json();
			const articles = json.map((article) => {
				return {
					url: article.url,
					title: article.title,
					image: article.cover_image,
					date: article.created_at
				};
			});
			await writeToPosts('devTo', `export default ${JSON.stringify(articles, null, 2)}`);
			return;
		}
		throw new Error('response not ok');
	} catch (err) {
		console.error(err);
		return;
	}
};

getDevToPosts();
