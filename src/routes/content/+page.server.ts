import posts from '$lib/data/_posts';
import devTo from '$lib/data/_devTo';
import { talks } from '$lib/data/_talks';

import type { PageServerLoad } from './$types';
import type { SharedContent } from 'src/global';

const internal = posts.map(post => {
	return {
		title: post.title,
		date: post.date,
		slug: post.slug,
		type: 'post',
	};
});


const date2Number = (string: string) => (new Date(string)).getTime();

export const load: PageServerLoad = () => {
	const content = [
		...internal,
		...devTo,
		...talks,
	];

	content.sort((a, b) => date2Number(b.date) - date2Number(a.date));

	return { content } as { content: SharedContent[] };
};