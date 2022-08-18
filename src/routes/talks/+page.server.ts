import type { PageServerLoad } from './$types'
import { talks } from './_talks';

export const load: PageServerLoad = async () => {
	return { talks };
};