import type { LayoutServerLoad } from ".svelte-kit/types/src/routes/$types";
export type LayoutServerResponse = {
	title: string,
	headerImg: string,
	href: string,
}

const titleFallback = 'Home';

export const load: LayoutServerLoad<LayoutServerResponse> = async ({ url: { href, pathname } }) => {
	const firstUrlSegment = pathname.split('/')[1] || titleFallback;
	const title = firstUrlSegment.slice(0, 1).toUpperCase() + firstUrlSegment.slice(1);
	const headerImg = ['Music'].includes(title) ? title : titleFallback;
	return {
		title,
		headerImg,
		href
	};
}
