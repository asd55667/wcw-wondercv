import { isDef } from '@/utils'

export const isLogin = state =>
  isDef(state.user.name) || isDef(state.user.email)

export const experience = state => {
  let ms = state.remains
  ms = ms.filter(v => v.tag in state.info)
  ms.forEach(v => (v.content = state.info[v.tag]))
  return ms
}
export const importedModules = (state, getters) => {
  const { imported } = state.info.basic
  return imported.map(id => getters.experience.find(v => v.id === id))
}

export const unimportedModules = state => {
  const { imported } = state.info.basic
  return state.remains.filter(v => !imported.includes(v.id))
}

export const socialTags = state => {
  const { social } = state.info.basic
  return filterTags(social)
}

export const otherTags = state => {
  const { other, intension } = state.info.basic
  Object.assign(other, intension)
  return filterTags(other)
}

const filterTags = obj => {
  const emptyTags = {},
    tags = {},
    views = {}
  for (let attr in obj) {
    if (obj[attr].value !== null) {
      // if(obj[attr].value !== undefined){}
      Object.assign(tags, { [attr]: obj[attr] })
      if (obj[attr].value !== '') Object.assign(views, { [attr]: obj[attr] })
    } else {
      Object.assign(emptyTags, { [attr]: obj[attr] })
    }
  }
  return { emptyTags, tags, views }
}
