export default {
  setUser(state, user) {
    state.user = user
  },

  setUserInfo(state, info) {
    state.info = info
  },

  updateAvatar(state, img) {
    state.info.basic.user.avatar = img
  },

  // remove item from bucket
  delModuleItem(state, idx) {
    const { imported } = state.info.basic
    // const tag = state.remains[imported[idx] - 1].tag
    // state.info[tag].forEach(v => (v.ref = false))
    imported.splice(idx, 1)
  },

  resetModules(state, imported) {
    state.info.basic.imported = imported
  },

  // update all
  manageExperience(state, payload) {
    const { tag, content } = payload
    const { imported } = state.info.basic

    // any(ref) === 1, imported exp; all(ref) == 0 , pop imported exp
    const idx = state.remains.filter(v => v.tag === tag)[0].id
    const importIdx = imported.indexOf(idx)
    var count = 0

    for (let item of content) {
      if (item.ref) {
        if (importIdx === -1) {
          imported.push(idx)
          break
        }
      } else count++
    }

    // remove empty bucket
    if (importIdx !== -1 && count == content.length)
      imported.splice(importIdx, 1)
    state.info[tag] = content
  },

  // refresh exist item's update time, push new item to bucket
  w(state, payload) {
    const {
      info,
      info: { basic },
    } = state
    const { tag, item } = payload

    const id = state.remains.filter(v => v.tag == tag)[0].id
    if (!basic.imported.includes(id)) basic.imported.push(id)

    const idx = info[tag].indexOf(item)
    if (idx !== -1) info[tag][idx].update = new Date()
    else {
      item.update = new Date()
      info[tag].push(item)
    }
  },
}
