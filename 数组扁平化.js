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
function platten(arr) {
  return arr.toString().split(',').map(item  => {
    return +item
  })
}

// reduce
function platten(arr) {
  return arr.reduce((prev, next) => {
    return prev.concat(Array.isArray(next) ? platten(next) : next)
  }, [])
}

// ES6的...
function platten(arr) {
  return [].concat(...arr)
}

// JSON.stringify
function platten(arr) {
  return JSON.stringify(arr).replace(/\[|\]/g, '').split(',').map(item => {
    return +item
  })
}

console.log(platten(arr)) // 函数提升