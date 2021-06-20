/* eslint-disable no-console */
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  responseType: 'json',
  withCredentials: false,
});

apiClient.interceptors.request.use(
  (config) => {
    const updatedConfig = {
      ...config,
    };

    // TODO: ADd TOKEN or headers here for each api call
    // get token from session storage if needed
    // const { token } = store.getState().session;
    const token = '';

    updatedConfig.headers.Authorization = `Bearer ${token}`;
    console.log('updatedConfig', updatedConfig);

    return updatedConfig;
  },
  (error) =>
    // Do something with request error
    Promise.reject(error)
);
