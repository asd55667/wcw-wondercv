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
    const tag = state.remains[state.imported[idx] - 1].tag
    state.info[tag].forEach(v => (v.ref = false))
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
    const idx = state.remains.filter(v => v.tag === tag)[0].id
    content.forEach(v => {
      if (v.ref && !state.imported.includes(idx)) state.imported.push(idx)
    })
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
