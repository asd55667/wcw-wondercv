export default {
  switchTab(state, idx) {
    state.activeId = idx
  },

  switchFormTag(state, tag) {
    state.formTag = tag
  },

  scanning(state) {
    state.isScanning = !state.isScanning
  },
}
