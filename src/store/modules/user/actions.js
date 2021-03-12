import { getUserInfo, updateBasic } from '@/api'

export default {
  async authlogin({ commit }, user) {
    commit('setUser', user)

    const uid = window.localStorage.getItem('uid')
    getUserInfo(uid).then(res => {
      commit('setUserInfo', res.data)
    })
  },

  logout({ commit }) {
    commit('setUser', {})
    commit('setUserInfo', {})
    window.localStorage.removeItem('access_token')
    window.localStorage.removeItem('refresh_token')
    window.localStorage.removeItem('uid')
  },

  // refresh exist item's update time, push new item to bucket
  async updateExperience({ commit, state }, payload) {
    commit('updateExperience', payload)

    const uid = window.localStorage.getItem('uid')
    updateBasic(uid, state.info.basic)
  },

  async updateAvatar({ commit, state }, payload) {
    commit('updateAvatar', payload)
    const uid = window.localStorage.getItem('uid')

    console.log(state.info.basic)
    this._vm.$nextTick(() => {
      if (uid) updateBasic(uid, state.info.basic)
      console.log(1, state.info.basic)
    })
  },
}
