import { z } from 'zod';
import { redirect } from '@sveltejs/kit';

import secret from '$/secret.server';

const registerSchema = z
	.object({
		meno: z
			.string({ required_error: 'Name is required' })
			.min(1, { message: 'Name is required' })
			.max(64, { message: 'Name must be less than 64 characters' })
			.trim(),
		email: z
			.string({ required_error: 'Email is required' })
			.min(1, { message: 'Email is required' })
			.max(64, { message: 'Email must be less than 64 characters' })
			.email({ message: 'Email must be a valid email address' }),
		heslo: z
			.string({ required_error: 'Password is required' })
			.min(6, { message: 'Password must be at least 6 characters' })
			.max(32, { message: 'Password must be less than 32 characters' })
			.trim(),
		hesloConfirm: z
			.string({ required_error: 'Password is required' })
			.min(6, { message: 'Password must be at least 6 characters' })
			.max(32, { message: 'Password must be less than 32 characters' })
			.trim(),
		'g-recaptcha-response': z
			.string({ required_error: 'No captcha supplied' })
	})
	.superRefine(({ hesloConfirm, heslo }, ctx) => {
		if (hesloConfirm !== heslo) {
			ctx.addIssue({
				code: 'custom',
				message: 'Password and Confirm Password must match',
				path: ['password']
			});
			ctx.addIssue({
				code: 'custom',
				message: 'Password and Confirm Password must match',
				path: ['passwordConfirm']
			});
		}
	});

import type { Actions } from './$types';
export const actions: Actions = {
	default: async ({ request, fetch }) => {
		const formData = Object.fromEntries(await request.formData());
		console.log('Form Data:', formData);

		let result;

		try {
			result = registerSchema.parse(formData);
		} catch (err) {
			const { fieldErrors: errors } = (err as z.ZodError).flatten();
			const { heslo, hesloConfirm, ...rest } = formData;
			return { data: rest, errors };
		}

		const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret.captchaSecret}&response=${result['g-recaptcha-response']}`;

		try {
			const captchaResult = await (await fetch(url, { method: 'POST' })).json();
			if (!captchaResult.success) {
				return { error: true, message: 'Invalid captcha' };
			}

		} catch (error) {
			return { error: true, message: error };
		}

		try {
			console.log('Successful registration');
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
		
		throw redirect(303, '/form/login');
	}
};