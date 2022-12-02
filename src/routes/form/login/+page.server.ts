import { redirect, type Actions, type ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}
};

import { z } from 'zod';
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

export const actions: Actions = {
	default: async ({ request, locals }) => {
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
			await locals.pb.collection('users').authWithPassword(result.email, result.heslo);
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