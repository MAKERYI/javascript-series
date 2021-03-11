// 基础版
const numFormat = num => {
  num = num.toString().split('.')
  let arr = num[0].split('').reverse()
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      res.push(',')
    }
    res.push(arr[i])
  }
  res.reverse()
  if (num[1]) {
    res = res.join('').concat('.' + num[0])
  } else {
    res.join('')
  }
  return res
}

// 正则
const numFormat2 = num => {
  const res = num.toString().replace(/\d+/, n => { // 取出整数
    return n.replace(/(\d)(?=(\d{3})+$)/g, x => { // 好难的正则
      return x + ','
    })
  })
  return res
}


console.log(numFormat2(111233.53))