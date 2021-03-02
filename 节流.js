let count = 1
let container = document.getElementById('container')

function getUserAction () {
  container.innerHTML = count++
}

function throttle (func, wait, options) {
  let timeout, ctx, args, result
  let previous = 0
  
  const later = () => {
    previous = options.leading === false ? 0 : new Date().getTime()
    timeout = null
    func.apply(ctx, args)
    if (!timeout) {
      ctx = args = null
    }
  }

  const throttled = () => {
    const now = new Date().getTime()
    if (!previous && options.leading === false) {
      previous = now
    }
    const remaining = wait - (now - previous)
    cxt = this
    arg = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func.apply(ctx, args)
      if (!timeout) {
        ctx = args = null
      }
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
  }

  throttled.cancel = () => {
    clearTimeout(timeout)
    timeout = null
    previous = 0
  }

  return throttled
}

const setUserAction = throttle(getUserAction, 10000, {
  leading: false,
  trailing: false
})

container.onmousemove = setUserAction

document.getElementById('button').addEventListener('click', () => {
  setUserAction.cancel()
})