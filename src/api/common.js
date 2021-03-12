import { refreshRequest, request } from '@/plugins'

function refresh(target, name, descriptor) {
  let old = descriptor.value

  let i = 1
  descriptor.value = async function(n) {
    try {
      // console.log('i ', i, arguments)
      const res = await old.apply(this, arguments)
      // console.log('decorator, ', res)
      return res
    } catch (err) {
      // console.log(err)
      try {
        const res = await refreshRequest.get('/login/token/refresh')
        // console.log('re', res)
        window.localStorage.setItem('access_token', res.data.access_token)
      } catch (err) {
        // login again
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('access_token')
        localStorage.removeItem('uid')
      }
      i++
      if (i < 3) return Promise.resolve(descriptor.value(...arguments))
    }
  }
  return descriptor
}

class RefreshRequest {
  @refresh
  async get() {
    return await request.get(...arguments)
  }

  @refresh
  async post() {
    return await request.post(...arguments)
  }
  @refresh
  async delete() {
    return await request.delete(...arguments)
  }
  @refresh
  async put() {
    return await request.put(...arguments)
  }
  @refresh
  async patch() {
    return await request.patch(...arguments)
  }
}

export const rrequest = new RefreshRequest()

// export async function rrequest() {
//   let i = 1
//   async function func() {
//     try {
//       const res = await request(...arguments)
//       // console.log('decorator, ', res)
//       return res
//     } catch (err) {
//       try {
//         const res = await refreshRequest.get('/login/token/refresh')
//         // console.log('refresh', res)
//         window.localStorage.setItem('access_token', res.data.access_token)
//       } catch (err) {
//         // login again
//         localStorage.removeItem('refresh_token')
//         localStorage.removeItem('access_token')
//       }
//       i++
//       if (i < 3) return func(...arguments)
//     }
//   }

//   return await func(...arguments)
// }
