import { redirect, ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ url }) => {
    const end = url.pathname.replace(/.*\//, '');
    const num = Number.parseInt(end);

    if (num > new Date().getDate() - 5) {
        throw redirect(300, '/');
    }
};