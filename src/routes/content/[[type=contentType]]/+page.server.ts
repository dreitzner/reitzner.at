import posts from '$lib/data/_posts';
import devTo from '$lib/data/_devTo';
import { talks } from '$lib/data/_talks';

import type { PageServerLoad } from './$types';
import type { SharedContent } from '../../../global';

const internal = posts.map((post) => {
	return {
		title: post.title,
		date: post.date,
		slug: post.slug,
		type: 'blog',
	};
});

const contentByType = (type: string) => {
	return [
		...internal.map((blog) => {
			return {
				...blog,
				visible: type === 'blog',
			};
		}),
		...devTo.map((blog) => {
			return {
				...blog,
				visible: type === 'blog',
			};
		}),
		...talks.map((talk) => {
			return {
				...talk,
				visible: talk.type === type,
			};
		}),
	];
};

const date2Number = (string: string) => new Date(string).getTime();

export const load: PageServerLoad = ({ params: { type } }) => {
	const tomorrow = new Date().getDate() + 1;

	let content = !type
		? [...internal, ...devTo, ...talks].map((item) => ({ ...item, visible: true }))
		: contentByType(type);

	content = content
		.filter(({ date }) => new Date(date) < new Date(new Date().setDate(tomorrow)))
		.sort((a, b) => date2Number(b.date) - date2Number(a.date));

	return { content } as {content: SharedContent[]};
};
