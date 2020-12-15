let count = 1
let container = document.getElementById('container')

function getUserAction () {
  container.innerHTML = count++
}

function debounce (func, wait, immediate) {
  let timeout, result

  const debounced = () => {
    let ctx = this
    let args = arguments

    if (timeout) {
      clearTimeout(timeout)
    }
    if (immediate) {
      let callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) {
        result = func.apply(ctx, args)
      }
    } else {
      timeout = setTimeout(() => {
        func.apply(ctx, args)
      }, wait)
    }

    return result
  }

  debounced.cancel = () => {
    clearTimeout(timeout)
    timeout = null
  }

  return debounced
}

const setUserAction = debounce(getUserAction, 10000, true)

container.onmousemove = setUserAction

document.getElementById('button').addEventListener('click', () => {
  setUserAction.cancel()
})