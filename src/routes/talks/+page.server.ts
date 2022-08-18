import type { RequestHandler } from './__types/index'
import { talks } from './_talks';

export const get: RequestHandler = async () => {
	return {
		body: { talks },
	};
};