import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ locals }) => {
    // todo den nejde na serveri

	return {
		day: new Date().getDate() - 5,
		// day: 2,
		user: locals.user ? <typeof locals.user>JSON.parse(JSON.stringify(locals.user)) : null,
	};
};
