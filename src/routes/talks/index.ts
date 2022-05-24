import type { RequestHandler } from '.svelte-kit/types/src/routes/talks/index'
import { talks } from './_talks';

export const get: RequestHandler = async () => {
	return {
		body: { talks },
	};
};