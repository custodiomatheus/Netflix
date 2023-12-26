import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

export const getInstance = (baseURL: string, token?: string): AxiosInstance => {
  const headers = {};

  if (token) {
    Object.assign(headers, { Authorization: `Bearer ${token}` });
  }

  const instance = axios.create({ baseURL, headers });

  instance.interceptors.response.use(responseInterceptor, responseErrorInterceptor);

  return instance;
};

const responseInterceptor = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const responseErrorInterceptor = (error: AxiosError): Promise<never> => {
  if (error?.response?.status === 401 || error?.response?.status === 403) {
    // store.dispatch('auth/handleLogout')
  }

  // alert(error.response.data.message);
  return Promise.reject(error.response);
};
