'use strict'

import Vue from 'vue'
import axios from 'axios'

import { Loading } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  baseURL: 'http://localhost:8081/',

  timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    NProgress.start()
    const token = window.localStorage.getItem('token')
    if (token) config.headers.common['Authorization'] = 'Bearer ' + token
    config.headers['wcw-key'] = 123
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    NProgress.done()

    return response
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error)
  },
)

// install
Plugin.install = function(Vue, options) {
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios
      },
    },
    $axios: {
      get() {
        return _axios
      },
    },
  })
}

Vue.use(Plugin)

export default Plugin