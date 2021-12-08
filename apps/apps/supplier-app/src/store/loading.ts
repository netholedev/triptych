import { writable } from 'svelte/store';

export const loadingState = writable<boolean>(false);
