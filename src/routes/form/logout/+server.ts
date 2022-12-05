import { redirect, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = ({ locals }) => {
	locals.pb.authStore.clear();
	locals.user = null;
	throw redirect(303, '/');
};