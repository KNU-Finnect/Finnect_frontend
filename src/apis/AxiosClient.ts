import axios from 'axios';
import { BASE_URI } from '@finnect/constants/URI';
import { refresh } from '@finnect/apis/auth/refresh.api';

export const axiosClient = axios.create({
  baseURL: BASE_URI,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 403 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshResponse = await refresh();
        const newToken = refreshResponse.headers.authorization;

        localStorage.setItem('accessToken', newToken);
        axiosClient.defaults.headers.common['Authorization'] = newToken;
        originalRequest.headers['Authorization'] = newToken;

        return axiosClient(originalRequest);
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
