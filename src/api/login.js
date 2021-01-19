import { refreshRequest, request } from '@/plugins'

export const getLoginCode = param => request.post('/get-login-code', param)

export const authLogin = param => request.post('/login', param)

export const gitLogin = () => request.get('/github/login')
