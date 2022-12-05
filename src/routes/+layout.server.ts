import type { User } from '$/types';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ locals }) => {
	console.log('a');

	return {
		day: new Date().getDay() - 5,
		user: locals.user ? <typeof locals.user>JSON.parse(JSON.stringify(locals.user)) : null
	};
};