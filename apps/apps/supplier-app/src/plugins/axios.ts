import axios, { AxiosInstance } from "axios";
import type { AxiosError } from "axios";
import { cleanTokens, REFRESH_TOKEN_KEY, setTokens, tokenState } from "../store";

export const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

api.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('TOKEN');

  if (token) {
    config.headers.authorization = `Bearer ${token}`
  }

  return config;
}, (error: AxiosError) => {
  return Promise.reject(error);
});

api.interceptors.response.use((response) => {
  return response;
}, async (error) => {
  console.log(error)
  const originalRequest = error.config;

  const isUnauth = error.response.status === 401 && !originalRequest._retry;
  const serverUnauthResponse = error.response?.data.code === 1;
  const serverNotFoundResponse = error.response?.data.code === 6;

  console.log(isUnauth, serverUnauthResponse, serverNotFoundResponse)

  if (isUnauth && serverUnauthResponse) {
    try {
      const { data } = await api.get('/auth/refresh', {
        headers: {
          'X-Refresh-Token': window.localStorage.getItem(REFRESH_TOKEN_KEY)
        }
      });

      setTokens(data);
      return api(originalRequest);
    }
    catch (err) {
      cleanTokens();
      return Promise.reject(error);
    }
  }

  return Promise.reject(error);
});
