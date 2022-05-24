import type { RequestHandler } from '.svelte-kit/types/src/routes/talks/[slug]'
import { talks } from './_talks';


export const get: RequestHandler = async ({ params }) => {
	const { slug } = params;
	const talk = talks.find(talk => talk.slug.endsWith(slug));
	if (talk) {
		return {
			body: { talk }
		};
	}
	return {
		status: 404,
		body: 'Slug not found'
	}
};