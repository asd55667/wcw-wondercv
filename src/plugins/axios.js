'use strict'

import Vue from 'vue'
import axios from 'axios'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  baseURL: 'http://localhost:8081',

  timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}

// with Loading
export const request = axiosFactory(
  config,
  reqInterceptorFactory('access_token'),
  errInterceptor,
  resInterceptorFactory('access_token'),
  errInterceptor,
)

export const refreshRequest = axiosFactory(
  config,
  reqInterceptorFactory('refresh_token'),
  errInterceptor,
  resInterceptorFactory('refresh_token'),
  errInterceptor,
)

function axiosFactory(
  config,
  reqInterceptor,
  reqErrInterceptor,
  resInterceptor,
  resErrInterceptor,
) {
  const _axios = axios.create(config)
  _axios.interceptors.request.use(reqInterceptor, reqErrInterceptor)
  _axios.interceptors.response.use(resInterceptor, resErrInterceptor)
  return _axios
}

function reqInterceptorFactory(local) {
  return function(config) {
    if (local === 'access_token') NProgress.start()
    const token = window.localStorage.getItem(local)
    if (token) config.headers.common['Authorization'] = 'Bearer ' + token
    // config.headers['wcw-key'] = 123
    return config
  }
}

function resInterceptorFactory(local) {
  return function(response) {
    if (local === 'access_token') {
      NProgress.done()
    }
    return response
  }
}

function errInterceptor(err) {
  return Promise.reject(err)
}
