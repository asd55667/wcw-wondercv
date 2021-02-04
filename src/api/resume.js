import { request } from '@/plugins'

// all
export const getUserInfo = id => request.get(`/resume/${id}`)

// basic
export const createBasic = form => request.post('/resume/basic', form)
export const updateBasic = (id, form) =>
  request.patch(`/resume/${id}/basic`, form)

// skill
export const getSkill = id => request.get(`/resume/${id}/skill`)
export const createSkill = (id, form) =>
  request.post(`/resume/${id}/skill`, form)
export const updateSkill = (id, form) =>
  request.patch(`/resume/${id}/skill`, form)

// plural form
export const getPlural = (id, tag) => request.get(`/resume/${id}/${tag}`)
export const createPlural = (id, tag, form) =>
  request.post(`/resume/${id}/${tag}`, form)
export const updatePlural = (id, tag, form) =>
  request.patch(`/resume/${id}/${tag}`, form)

export const sendEmail = payload => request.post(`login/email/resume`, payload)
