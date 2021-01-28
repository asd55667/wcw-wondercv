import { request } from '@/plugins'
import { rrequest } from './common'

export const emailLoginCode = param => request.post('/login/email/code', param)

export const emailLogin = param => request.post('/login/email', param)

export const gitLogin = () => request.get('/login/github')

export const tokenLogin = () => rrequest.get('/login/token')
