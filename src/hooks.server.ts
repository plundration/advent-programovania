import PocketBase from 'pocketbase';

import type { Handle } from '@sveltejs/kit';
import config from '$/config';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase(config.pocketbaseUrl);
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = event.locals.pb.authStore.model;
	} else {
		event.locals.user = null;
	}
	
	const response = await resolve(event);

	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: true, sameSite: true }));

	return response;
};