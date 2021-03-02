let arr = [1, 3, 5, 3, 'a', 4, '1', 'b', 'a']

// 双层循环
function unique(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    for (var j = 0; j < res.length; j++) {
      if (arr[i] === res[j]) break
    }
    if (j === res.length) res.push(arr[i])
  }
  return res
}

// indexOf
function unique(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) res.push(arr[i])
  }
  return res
}

// 排序后求去重
function unique(arr) {
  let res = []
  let sortedArr = arr.concat().sort()
  let seen
  for (let i = 0; i < sortedArr.length; i++) {
    if (!i || seen !== sortedArr[i]) {
      res.push(sortedArr[i])
    }
    seen = sortedArr[i]
  }
  return res
}

// filter
// 1.indexOf
function unique(arr) {
  return arr.filter((item, index, array) => {
    return array.indexOf(item) === index
  })
}
// 2. 排序后去重
function unique(arr) {
  return arr.concat().sort().filter((item, index, array) => {
    return !index || item !== array[index - 1]
  })
}

// Object 键值对
function unique(arr) {
  let obj = {}
  return arr.filter((item, index, array) => {
    return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true)
  })
}

// ES6
// 1.Set
function unique(arr) {
  return [].concat(...new Set(arr))
}
// 2.Map
function unique(arr) {
  const seen = new Map()
  return arr.filter(item => !seen.has(item) && seen.set(item, 1))
}

console.log(unique(arr))


