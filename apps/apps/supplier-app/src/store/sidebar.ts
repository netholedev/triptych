import { writable } from 'svelte/store';

export const sidebarState = writable<boolean>(false);
// export const sidebarState = writable<boolean>(true);