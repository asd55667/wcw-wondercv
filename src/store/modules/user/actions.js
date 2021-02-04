// import storage from 'good-storage'
// import { notify, isDef } from '@/utils'
import { getUserInfo } from '@/api'

export default {
  async authlogin({ commit }, user) {
    commit('setUser', user)

    const uid = window.localStorage.getItem('uid')
    const res = await getUserInfo(uid)
    commit('setUserInfo', res.data)

    // getUserInfo(uid).then(res => {
    //   commit('setUserInfo', res.data)
    // })
  },

  logout({ commit }) {
    commit('setUser', {})
    commit('info', {})
    window.localStorage.removeItem('access_token')
    window.localStorage.removeItem('refresh_token')
    window.localStorage.removeItem('uid')
  },
}
