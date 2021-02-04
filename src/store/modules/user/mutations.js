export default {
  setUser(state, user) {
    state.user = user
  },

  setUserInfo(state, info) {
    state.info = info
  },

  setImportedModules(state, imported) {
    state.info.basic.Dateimported = imported
  },

  // module manage
  appendModuleItem(state) {},

  delModuleItem(state, idx) {
    const { imported } = state.info.basic
    const tag = state.remains[imported[idx] - 1].tag
    state.info[tag].forEach(v => (v.ref = false))
    imported.splice(idx, 1)
  },

  resetModules(state, imported) {
    state.info.basic.imported = imported
  },

  changeRefState(state, payload) {
    const { tag, idx } = payload
    state.info[tag][idx].ref = !state.info[tag][idx].ref
  },

  manageExperience(state, payload) {
    const { tag, content } = payload
    const { imported } = state.info.basic
    const idx = state.remains.filter(v => v.tag === tag)[0].id
    content.forEach(v => {
      if (v.ref && !imported.includes(idx)) imported.push(idx)
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
