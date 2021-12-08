import { writable } from 'svelte/store';
import { api } from '../plugins';
import type { IProfile } from '../interfaces';

export const TOKEN_KEY = "TOKEN"
export const REFRESH_TOKEN_KEY = "REFRESH_TOKEN"

export const tokenState = writable<string | null>(null);
export const refreshTokenState = writable<string | null>(null);
export const currentUserState = writable<IProfile | null>(null);

const localToken = window.localStorage.getItem(TOKEN_KEY);
const localRefreshToken = window.localStorage.getItem(REFRESH_TOKEN_KEY);

if (localToken && localRefreshToken) {
  tokenState.set(localToken);
  refreshTokenState.set(localRefreshToken);

  api
    .get('/auth/profile')
    .then((res) => currentUserState.set(res.data))
    .catch(() => cleanTokens());
}

export const setTokens = (data: { token: string, refresh_token: string }) => {
  const token = data.token;
  const refreshToken = data.refresh_token;

  window.localStorage.setItem(TOKEN_KEY, token);
  window.localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);

  tokenState.set(token);
  refreshTokenState.set(refreshToken);

  api.get('/auth/profile')
    .then((res) => currentUserState.set(res.data))
    .catch(() => cleanTokens())
}

export const cleanTokens = () => {
  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.removeItem(REFRESH_TOKEN_KEY);
  currentUserState.set(null);
}