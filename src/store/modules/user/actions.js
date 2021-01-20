// import storage from 'good-storage'
// import { notify, isDef } from '@/utils'

export default {
  async authlogin({ commit }, user) {
    commit('setUser', user)
  },

  logout({ commit }) {
    commit('setUser', {})
    commit('info', {})
    commit('imported', [])
  },
}
