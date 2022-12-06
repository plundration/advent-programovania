import { z } from 'zod';
import { redirect } from '@sveltejs/kit';

import secret from '$/secret.server';

const registerSchema = z
	.object({
		meno: z
			.string({ required_error: 'Meno je povinné' })
			.min(3, { message: 'Príliš krátke meno' })
			.max(100, { message: 'Meno musí byt kratšie než 100 symbolov' })
			.trim(),
		email: z
			.string({ required_error: 'Email je povinný' })
			.min(5, { message: 'Príliš krátky email' })
			.max(100, { message: 'Email musí byť kratší než 100 symbolov' })
			.email({ message: 'Nevalidný email' }),
		heslo: z
			.string({ required_error: 'Heslo je povinné' })
			.min(6, { message: 'Heslo musí byť dlhšie než 6 symbolov' })
			.max(32, { message: 'Heslo musí byť kratšie než 32 symbolov' })
			.trim(),
		hesloConfirm: z
			.string({ required_error: 'Heslo je povinné' })
			.min(6, { message: 'Heslo musí byť dlhšie než 6 symbolov' })
			.max(32, { message: 'Heslo musí byť kratšie než 32 symbolov' })
			.trim(),
		'g-recaptcha-response': z
			.string({ required_error: 'Nevyplnená captcha' })
	})
	.superRefine(({ hesloConfirm, heslo }, ctx) => {
		if (hesloConfirm !== heslo) {
			ctx.addIssue({
				code: 'custom',
				message: 'Nezhodné heslá',
				path: ['password']
			});
			ctx.addIssue({
				code: 'custom',
				message: 'Nezhodné heslá',
				path: ['passwordConfirm']
			});
		}
	});

import type { Actions } from './$types';
export const actions: Actions = {
	default: async ({ request, fetch, locals }) => {
		const formData = Object.fromEntries(await request.formData());
		console.log('Form Data:', formData);

		let result;

		try {
			result = registerSchema.parse(formData);
		} catch (err) {
			const error = (err as z.ZodError).errors[0];
			return { error: true, message: error.message };
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
			const userParams = {
				email: result.email,
				password: result.heslo,
				passwordConfirm: result.heslo,
				name: result.meno,
			};

			const newUser = await locals.pb.collection('users').create(userParams);
			const { token, record } = await locals.pb.collection('users').authWithPassword(result.email, result.heslo);

			locals.pb.authStore.clear();
		} catch (err: any) {
			console.log('Error:', err);
			return { error: true, message: err?.data?.message };
		}

		throw redirect(303, '/form/login');
	}
};