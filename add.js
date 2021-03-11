const curry = (fn, ...args) => 
  args.length >= fn.length 
  ? fn(...args) 
  : (..._args) => curry(fn, ...args, ..._args)

const adder = (a, b, c) => {
  return a + b + c
}

const add = curry(adder)

console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));


function add1(x) {
  let sum = x
  const temp = y => {
    sum += y
    return temp
  }
  temp.toString = () => {
    return sum
  }
  return temp
}

console.log(add1(1)(2)(3)); //6
console.log(add1(1)(2)(3)(4)); //10