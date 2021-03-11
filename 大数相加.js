let a = "9007199254740991";
let b = "1234567899999999999";

const add = (a, b) => {
  let maxLen = Math.max(a.length, b.length)
  a = a.padStart(maxLen, 0)
  b = b.padStart(maxLen, 0)
  let t = 0
  let f = 0 // 进位
  let sum = ''
  for (let i = maxLen - 1; i >= 0; i--) {
    t = parseInt(a[i]) + parseInt(b[i]) + f
    f = Math.floor(t / 10)
    sum = t % 10 + sum
  }
  if (f == 1) sum = '1' + sum
  return sum
}

console.log(add(a, b));