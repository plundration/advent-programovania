import { getDay } from '$/lib/utils';
import { redirect, ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ url }) => {
    const end = url.pathname.replace(/.*\//, '');
    const num = Number.parseInt(end);

    if (num > getDay()) {
        throw redirect(300, '/');
    }
};
