// new Generator()
// 1. Generator函数都会返回一个迭代器对象，该对象中具备一个next函数

function* test() {
  let a = yield 1 + 2;
  let b = yield a * 3
  let c = yield b + 10
  console.log(c);
}

let res = test()
let val1 = res.next()
let val2 = res.next(val1.value)
let val3 = res.next(val2.value)
let val4 = res.next(val3.value)

console.log(val1); // { value: 3, done: false }  value的值是yield后面的值，和a没关系
console.log(val2); // { value: 9, done: false }
console.log(val3); // { value: 19, done: false }
console.log(val4); // { value: undefined, done: true }