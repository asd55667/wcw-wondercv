export default {
  setUser(state, user) {
    state.user = user
  },

  setImportedModules(state, imported) {
    state.imported = imported
  },

  setUserInfo(state, info) {
    state.info = info
  },

  // module manage
  appendModuleItem(state) {},

  delModuleItem(state, idx) {
    state.imported.splice(idx, 1)
  },

  resetModules(state, imported) {
    state.imported = imported
  },

  changeRefState(state, payload) {
    const { tag, idx } = payload
    state.info[tag][idx].ref = !state.info[tag][idx].ref
  },

  manageExperience(state, payload) {
    const { tag, content } = payload
    state.info[tag] = content
  },

  createExperience(state, payload) {
    const { tag, item } = payload
    state.info[tag].push(item)
  },

  updateExperience(state, payload) {
    const { tag, item } = payload
    const idx = state.info[tag].indexOf(item)
    state.info[tag][idx].update = new Date()
  },
}
