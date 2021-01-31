import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import globalModule from './modules/global'
import userModule from './modules/user'
import resumeModule from './modules/resume'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // strict: process.env.NODE_ENV !== 'production',
  modules: {
    resume: resumeModule,
    user: userModule,
    global: globalModule,
  },
  plugins: debug ? [createLogger()] : [],
})

if (module.hot) {
  module.hot.accept(['./modules/user/mutations'], () => {
    const newUserModule = require('./modules/user').default
    const newResumeModule = require('./modules/resume').default
    store.hotUpdate({
      modules: {
        resume: newResumeModule,
        user: newUserModule,
      },
    })
  })
}
