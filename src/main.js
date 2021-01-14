import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import './plugins'


import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import font from '@/assets/font'

Vue.prototype.$http = axios
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.interceptors.request.use(
  config => {
    NProgress.start()
    // config.headers.Authorization = window.sessionStorage.getItem('token')
    const token = window.localStorage.getItem('token')
    if (token) config.headers.common['Authorization'] = 'Bearer ' + token
    return config
  },

  err => {
    return Promise.reject(err)
  },
)
axios.interceptors.response.use(config => {
  NProgress.done()
  return config
})



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
