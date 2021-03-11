let arr =  [1, [2, 3, [1, 4]]]

// flat，不改变原数组
// console.log(arr.flat(Infinity));

// 递归
function flatten(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

// toString，使用的前提是数组的元素都是数字
function flatten(arr) {
  return arr.toString().split(',').map(item  => {
    return +item
  })
}

// reduce
function flatten(arr) {
  return arr.reduce((prev, next) => {
    return prev.concat(Array.isArray(next) ? flatten(next) : next)
  }, [])
}

// ES6的... 只能拉平一层
function flatten(arr) {
  return [].concat(...arr)
}

// apply 只能拉平一层
function flatten(arr) {
  return [].concat.apply([], arr)
}
// JSON.stringify
function flatten(arr) {
  return JSON.stringify(arr).replace(/\[|\]/g, '').split(',').map(item => {
    return +item
  })
}

// 栈
function flatten(arr) {
  const result = []
  const stack = [].concat(arr)
  while (stack.length !== 0) {
    const val = stack.pop()
    if (Array.isArray(val)) {
      stack.push(...val)
    } else {
      result.unshift(val)
    }
  }
  return result
}
// Generator
function* flatten(arr, num) {
  if (num === undefined) num = 1
  for (const item of arr) {
    if (Array.isArray(item)) {
      yield* flatten(item, num - 1)
    } else {
      yield item
    }
  }
}
// 原型链
Array.prototype.fakeFlat = function(num = 1) {
  if (!Number(num) || Number(num) < 0) return this
  let arr = this.concat()
  while (num > 0) {
    if (arr.some(item => Array.isArray(item))) {
      arr = [].concat.apply([], arr)
    } else {
      break
    }
    num--
  }
  return arr
}

// 通过传入整数参数控制“拉平”层数
function flatten(arr, num = 2) {
  return num > 0
  ? arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? flatten(cur, num - 1) : cur), [])
  : arr.slice()
}
// 考虑数组空位的情况
// 1. reduce
Array.prototype.fakePlat = function(num) {
  if (!Number(num) || Number(num) < 0) return this
  let arr = [].concat(this)
  return num > 0
  ? arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? cur.fakePlat(num - 1) : cur))
  : arr.slice()
}

// 2. forEach
Array.prototype.fakePlat = function(num) {
  if (!Number(num) || Number(num) < 0) return this
  let arr = []
  this.forEach(item => {
    if (Array.isArray(item)) {
      arr = arr.concat(item.fakePlat(num - 1))
    } else {
      arr.push(item)
    }
  })
  return arr
}

console.log(arr.fakePlat()) // 函数提升