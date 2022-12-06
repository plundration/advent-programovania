import type { Submission } from '$/types';
import type { LayoutServerLoad } from './$types';

async function getUserSubmissions(locals: App.Locals) : Promise<Array<Submission>> {
	let submissions = new Array<Submission>(18);

	try {
		const result = await locals.pb.collection('submissions').getList(0, 18, { filter: `user_id == ${locals.user?.id}` });
		if (!result.items) return submissions;

		if (result.totalItems > 18) { /* log issue to database */ }
		
		submissions = new Array<Submission>(18);
		
		result.items.forEach((value: any) => {
			submissions[value.day - 1] = {
				id: value.id,
				day: value.day,
				file: value.file,
			};
		});
		
		return submissions;
	}

	catch (err) {
		console.log(err);
		return submissions;
	}
}

export const load: LayoutServerLoad = async ({ locals }) => {
	let submissions = null;
	if (locals.user) {
		submissions = await getUserSubmissions(locals);
	}

	return {
		day: new Date().getDate() - 5 + 1,
		user: locals.user ? <typeof locals.user>JSON.parse(JSON.stringify(locals.user)) : null,
		// submissions: submissions,
		submissions: [true, false]
	};
};
