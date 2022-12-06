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
			.string({ required_error: 'Email je povinný' })
			.min(5, { message: 'Príliš krátky email' })
			.max(100, { message: 'Email musí byť kratší než 100 symbolov' })
			.email({ message: 'Nevalidný email' }),
		heslo: z
			.string({ required_error: 'Heslo je povinné' })
			.min(6, { message: 'Heslo musí byť dlhšie než 6 symbolov' })
			.max(32, { message: 'Heslo musí byť kratšie než 32 symbolov' })
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
			const error = (err as z.ZodError).errors[0];
			return { error: true, message: error.message };
		}

		try {
			await locals.pb.collection('users').authWithPassword(result.email, result.heslo);
		} catch (err) {
			console.log('Error:', err);
			return { error: true, message: err };
		}

		throw redirect(303, '/');
	}
};