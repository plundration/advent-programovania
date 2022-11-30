import { User } from '$/types';

declare global {
	namespace App {
		interface Locals {
			user: User;
		}
		// interface PageData {}
		// interface Error {}
		// interface Platform {}
	}
}