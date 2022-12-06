import { ClientResponseError } from 'pocketbase';
import { type RequestHandler, error, redirect } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, locals, url }) => {
    const day = Number.parseInt(url.pathname.replace(/^.*\//, ''));
    if (day < 1 || day > 18) throw error(404, { message: 'Invalid date' });
    if (!locals.user) throw error(404, { message: 'No user' });

    // const formData = Object.fromEntries(await request.formData());
    const formData = await request.formData();
    console.log('Form Data:', formData);
    if (!formData.has('file')) throw error(404, { message: 'No file provided' });

    try {
        const submission = await locals.pb.collection('submissions').getFirstListItem(`day=${day}`);
        await locals.pb.collection('submissions').delete(submission.id);
    } catch (err) {
        if (!(err instanceof ClientResponseError) || err.status !== 404)
            throw error(404, { message: JSON.stringify(err) });
    }

    formData.append('user_id', locals.user.id);
    formData.append('day', day.toString());

    try {
        await locals.pb.collection('submissions').create(formData);
    } catch (err) {
        throw error(404, { message: JSON.stringify(err) });
    }

    throw redirect(303, '/');
};