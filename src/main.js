import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import './plugins'

// import '@/style/index.scss'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
