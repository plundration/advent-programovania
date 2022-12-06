import { redirect, ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ url }) => {
    const end = url.pathname.replace(/.*\//, '');
    const num = Number.parseInt(end);

    if (num > new Date().getDate() - 5) {
        throw redirect(300, '/');
    }
};

import type { Actions } from './$types';
export const actions: Actions = {
    default: async ({ request, fetch, locals }) => {
        const formData = Object.fromEntries(await request.formData());
        console.log('Form Data:', formData);

        // locals.pb.collection('submissions').create();

        throw redirect(303, '/form/login');
    }
};