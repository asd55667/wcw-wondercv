import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import globalModule from './modules/global'
import userModule from './modules/user'
import resumeModule from './modules/resume'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    resume: resumeModule,
    user: userModule,
    global: globalModule,
  },
  plugins: debug ? [createLogger()] : [],
})
