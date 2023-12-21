import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types'
import { talks } from '$lib/data/_talks';


export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const talk = talks.find(talk => talk.slug.endsWith(slug));
	if (talk) {
		return { talk };
	}
	error(404, 'Slug not found');
}
