import { rrequest } from './common'

// basic
export const createBasic = form => rrequest.post('/resume/basic', form)
export const updateBasic = (id, form) =>
  rrequest.patch(`/resume/${id}/basic`, form)

// skill
export const getSkill = id => rrequest.get(`/resume/${id}/skill`)
export const createSkill = (id, form) =>
  rrequest.post(`/resume/${id}/skill`, form)
export const updateSkill = (id, form) =>
  rrequest.patch(`/resume/${id}/skill`, form)

// plural form
export const getPlural = (id, tag) => rrequest.get(`/resume/${id}/${tag}`)
export const createPlural = (id, tag, form) =>
  rrequest.post(`/resume/${id}/${tag}`, form)
export const updatePlural = (id, tag, form) =>
  rrequest.patch(`/resume/${id}/${tag}`, form)
