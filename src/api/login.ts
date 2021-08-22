import type { Email } from '#/views/login';

import { request } from '@/utils/network';
// import { request } from './common'

export const emailLoginCode = (param: Pick<Email, 'email'>) =>
  request.post('/login/email/code', param);

export const emailLogin = (param: Email) => request.post('/login/email', param);

export const gitLogin = () => request.get('/login/github');

export const tokenLogin = () => request.get('/login/token');
