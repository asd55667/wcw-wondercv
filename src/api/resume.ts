import { request } from '@/utils/network';

// all
export const getUserInfo = (id: string) => request.get(`/resume/${id}`);

// basic`
export const updateBasic = (id: string, form: Record<string, string | number>) =>
  request.patch(`/resume/${id}/basic`, form);

// singular form
export const getSingular = (id: string, tag: string) => request.get(`/resume/${id}/${tag}`);
export const createSingular = (id: string, tag: string, form: Record<string, string | number>) =>
  request.post(`/resume/${id}/${tag}`, form);
export const updateSingular = (id: string, tag: string, form: Record<string, string | number>) =>
  request.patch(`/resume/${id}/${tag}`, form);
export const deleteSingular = (id: string, tag: string) => request.delete(`/resume/${id}/${tag}`);

// plural form
export const getPlural = (id: string, tag: string) => request.get(`/resume/${id}/${tag}`);
export const createPlural = (id: string, tag: string, form: Record<string, string | number>) =>
  request.post(`/resume/${id}/${tag}`, form);
export const updatePlural = (id: string, tag: string, form: Record<string, string | number>) =>
  request.patch(`/resume/${id}/${tag}`, form);
export const deletePlural = (id: string, tag: string) => request.delete(`/resume/${id}/${tag}`);

export const sendEmail = (payload: Record<string, string | number>) =>
  request.post(`login/email/resume`, payload);
