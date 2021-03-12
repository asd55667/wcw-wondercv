import { request } from '@/plugins'

// all
export const getUserInfo = id => request.get(`/resume/${id}`)

// basic`
export const updateBasic = (id, form) =>
  request.patch(`/resume/${id}/basic`, form)

// singular form
export const getSingular = (id, tag) => request.get(`/resume/${id}/${tag}`)
export const createSingular = (id, tag, form) =>
  request.post(`/resume/${id}/${tag}`, form)
export const updateSingular = (id, tag, form) =>
  request.patch(`/resume/${id}/${tag}`, form)
export const deleteSingular = (id, tag) =>
  request.delete(`/resume/${id}/${tag}`)

// plural form
export const getPlural = (id, tag) => request.get(`/resume/${id}/${tag}`)
export const createPlural = (id, tag, form) =>
  request.post(`/resume/${id}/${tag}`, form)
export const updatePlural = (id, tag, form) =>
  request.patch(`/resume/${id}/${tag}`, form)
export const deletePlural = (id, tag) => request.delete(`/resume/${id}/${tag}`)

export const sendEmail = payload => request.post(`login/email/resume`, payload)
