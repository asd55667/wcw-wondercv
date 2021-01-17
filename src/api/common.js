import { refreshRequest, request } from '@/plugins'

// export const authTest = async n => {
//   let i = 1
//   try {
//     const res = await request.get('auth')
//     console.log(res)
//   } catch (err) {
//     console.log(err)
//     const res = await refreshRequest.get('refresh-token')
//     console.log(res)
//     window.localStorage.setItem('access_token', res.data.access_token)
//     i++
//     if (i < 2)
//       setTimeout(() => {
//         authTest(i)
//       }, 200)
//   }
// }

function refresh(target, name, descriptor) {
  let old = descriptor.value

  let i = 1
  descriptor.value = async function helper(n) {
    try {
      console.log('i ', i, arguments)
      const res = await old.apply(this, arguments)
    } catch (err) {
      console.log(err)
      const res = await refreshRequest.get('refresh-token')
      console.log(res)
      window.localStorage.setItem('access_token', res.data.access_token)
      i++
      if (i < 3)
        setTimeout(() => {
          helper(...arguments)
        }, 100)
    }
  }
  return descriptor
}

class RefreshRequest {
  @refresh
  async request() {
    const res = await request(...arguments)
    console.log('decorator, ', res)
    return res
  }
}

export const rrquest = new RefreshRequest()

// /Public/player/m3u8.php?url=https://douban.donghongzuida.com/20210106/15299_54a3e215/index.m3u8
// ffmpeg -i 'https://douban.donghongzuida.com/20210106/15299_54a3e215/index.m3u8' -bsf:a aac_adtstoasc \
//     -vcodec copy -c copy -crf 50 file.mp4
