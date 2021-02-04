// import { Notification } from 'element-ui'

// export function notify(message, type) {
//   const params = {
//     message,
//     duration: 1500,
//   }
//   const fn = type ? Notification[type] : Notification
//   return fn(params)
// }
// ;['success', 'warning', 'info', 'error'].forEach(key => {
//   notify[key] = message => {
//     return notify(message, key)
//   }
// })

export function isUndef(v) {
  return v === undefined || v === null
}

export function isDef(v) {
  return v !== undefined && v !== null
}

export function isObject(obj) {
  return obj !== null && typeof obj === 'object'
}

export function isPromise(promise) {
  return promise && typeof promise.then === 'function'
}

export function find(arr, f) {
  return arr.filter(f)[0]
}

export function deepCopy(obj, cache = []) {
  if (obj === null || typeof obj !== 'object' || obj instanceof Date) {
    return obj
  }
  const hit = find(cache, c => c.original === obj)
  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj) ? [] : {}
  cache.push({
    original: obj,
    copy,
  })

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })

  return copy
}

export function forEachValue(obj, fn) {
  Object.keys(obj).forEach(key => fn(obj[key], key))
}

const padZero = v => (v < 10 ? '0' + v : v)

export const relativeDate = date => {
  const currentDate = new Date()
  date = new Date(date)
  if (currentDate.getTime() - date.getTime() < 1000 * 3600 * 1) return `刚刚`
  if (date.getFullYear() < currentDate.getFullYear()) {
    return `${date.getFullYear()}年${padZero(date.getMonth() + 1)}月+${padZero(
      date.getDate(),
    )}日`
  }
  return `${padZero(date.getMonth() + 1)}月${padZero(date.getDate())}日`
}

export const clearAttr = obj => {
  let count = 0
  forEachValue(obj.attrs, (attr, name) => {
    if (!attr?.value) {
      delete obj.attrs[name]
      count++
    }
  })
  if (count === Object.keys(obj.attrs).length) {
    delete obj.attrs
  }
}
