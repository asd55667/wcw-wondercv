export default {
  switchTab(state, idx) {
    state.activeId = idx
  },

  switchFormTag(state, tag) {
    state.formTag = tag
  },

  switchFormIdx(state, Idx) {
    state.formIdx = Idx
  },

  switchFormState(state, bool) {
    state.isNewForm = bool
  },

  scanning(state) {
    state.isScanning = !state.isScanning
  },
}
