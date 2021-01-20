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

  appendModuleItem(state) {},

  delModuleItem(state, idx) {
    state.imported.splice(idx, 1)
  },

  resetModules(state, imported) {
    state.imported = imported
  },

  changeRefState(state, id) {
    state.remains.forEach(v => {
      if (id === v.id) {
        v.ref = false
      }
    })
  },
}
