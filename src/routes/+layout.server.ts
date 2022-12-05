import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ locals }) => {
	return {
		day: new Date().getDate() - 5,
		user: locals.user ? <typeof locals.user>JSON.parse(JSON.stringify(locals.user)) : null,
	};
};