import { rrequest } from './common'

// basic
export const createBasic = form => rrequest.post('/resume/basic', form)
export const updateBasic = (id, form) =>
  rrequest.patch(`/resume/basic/${id}`, form)

// skill
export const getSkill = id => rrequest.get(`/resume/skill/${id}`)
export const createSkill = form => rrequest.post('/resume/skill', form)
export const updateSkill = (id, form) =>
  rrequest.patch(`/resume/skill/${id}`, form)

// plural form
export const getPlural = (id, tag) => rrequest.get(`/resume/${tag}/${id}`)
export const createPlural = (tag, form) => rrequest.post(`/resume/${tag}`, form)
export const updatePlural = (id, tag, form) =>
  rrequest.patch(`/resume/${tag}/${id}`, form)
