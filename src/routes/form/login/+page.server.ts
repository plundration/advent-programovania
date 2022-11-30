import { z } from 'zod';
import { redirect } from '@sveltejs/kit';

const registerSchema = z
	.object({
		email: z
			.string({ required_error: 'Email is required' })
			.min(1, { message: 'Email is required' })
			.max(64, { message: 'Email must be less than 64 characters' })
			.email({ message: 'Email must be a valid email address' }),
		heslo: z
			.string({ required_error: 'Password is required' })
			.min(6, { message: 'Password must be at least 6 characters' })
			.max(32, { message: 'Password must be less than 32 characters' })
			.trim()
	});

import type { Actions } from './$types';
export const actions: Actions = {
	default: async ({ request, fetch, locals}) => {
		const formData = Object.fromEntries(await request.formData());
		console.log('Form Data:', formData);

		let result;
		
		try {
			result = registerSchema.parse(formData);
		} catch (err) {
			const { fieldErrors: errors } = (err as z.ZodError).flatten();
			const { heslo, ...rest } = formData;
			return { data: rest, errors };
		}
		
		try {
			console.log('Successful login');
			// const newUser = await pb.users.create(result);
			// const { token, user } = await pb.users.authViaEmail(result.email, result.heslo);
			// const updatedProfile = await pb.records.update('profiles', user.profile.id, {
			// 	name: result.meno
			// });
			// pb.authStore.clear();
		} catch (err) {
			console.log('Error:', err);
			return {
				error: true,
				message: err
			};
		}

		throw redirect(303, '/');
	}
};