import { refreshRequest, request } from '@/plugins'

export const authTest = async n => {
  let i = 1
  try {
    const res = await request.get('auth')
    console.log(res)
  } catch (err) {
    console.log(err)
    const res = await refreshRequest.get('refresh-token')
    console.log(res);
    window.localStorage.setItem('access_token', res.data.access_token)
    i++
    if (i < 2)
      setTimeout(() => {
        authTest(i)
      }, 200)
  }
}
