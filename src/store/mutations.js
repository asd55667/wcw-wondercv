export default {
  switchTab(state, idx) {
    state.activeId = idx
  },
  switchFormTag(state, tag) {
    state.formTag = tag
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

  scanning(state) {
    state.isScanning = !state.isScanning
  },
}
