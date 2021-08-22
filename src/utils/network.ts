import type { AxiosRequestConfig, AxiosResponse } from 'axios';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import Axios, { Interceptor } from '@/utils/axios';

const config: AxiosRequestConfig = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

enum Token {
  Access = 'access_token',
  Refresh = 'refresh_token',
}

function reqInterceptorFactory(type: Token) {
  return function request(
    cfg: AxiosRequestConfig
  ): AxiosRequestConfig | Promise<AxiosRequestConfig> {
    if (type === Token.Access) NProgress.start();
    const token = window.localStorage.getItem(type);
    if (token) cfg.headers.common.Authorization = `Bearer ${token}`;
    // config.headers['wcw-key'] = 123
    return config;
  };
}

function resInterceptorFactory(type: Token) {
  return function response(res: AxiosResponse): AxiosResponse | Promise<AxiosResponse> {
    if (type === Token.Access) NProgress.done();
    return res;
  };
}

function errInterceptor(err: unknown) {
  return Promise.reject(err);
}

const requestInterceptors: Interceptor[] = [
  {
    fulfilled: reqInterceptorFactory(Token.Access),
    rejected: errInterceptor,
  },
  {
    fulfilled: resInterceptorFactory(Token.Access),
    rejected: errInterceptor,
  },
];
export const request = new Axios(config, requestInterceptors);

const refreshInterceptors: Interceptor[] = [
  {
    fulfilled: reqInterceptorFactory(Token.Refresh),
    rejected: errInterceptor,
  },
  {
    fulfilled: resInterceptorFactory(Token.Refresh),
    rejected: errInterceptor,
  },
];
export const refreshRequest = new Axios(config, refreshInterceptors);
