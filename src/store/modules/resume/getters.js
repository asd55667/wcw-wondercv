export default {
  experience(state) {
    let ms = state.remains
    ms = ms.filter(v => v.tag in state.info)
    ms.forEach(v => (v.content = state.info[v.tag]))
    return ms
  },
  modules(state, getters) {
    return state.imported.map(id => getters.experience.find(v => v.id === id))
    // return state.imported.map(idx => state.remains[idx - 1])
  },
}
