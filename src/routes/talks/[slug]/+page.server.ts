import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types'
import { talks } from '../_talks';


export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const talk = talks.find(talk => talk.slug.endsWith(slug));
	if (talk) {
		return { talk };
	}
	throw error(404, 'Slug not found');
}
