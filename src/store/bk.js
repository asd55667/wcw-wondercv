import Vue from 'vue'
import Vuex from 'vuex'
import resumeModule from './modules/resume'
import userModule from './modules/user'
import globalModule from './modules/global'
import createLogger from 'vuex/dist/logger'

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
