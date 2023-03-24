const singers = [
  { name: '许嵩', num: 2 },
  { name: '周杰伦', num: 3 },
  { name: '林俊杰', num: 4 },
  { name: '陈奕迅', num: 5 },
  { name: '薛之谦', num: 6 }
]

// reduce回调返回的值会作为当前遍历到的值的上一项
const res = singers.reduce((pre, next, index, arr) => {
  // console.log(pre, next, index, arr);
  pre.push(next.num)
  return pre
}, [])
console.log(res);

// Array.prototype.my_reduce = function(callback, ...args) {
//   let pre = null, start = 0
//   if (args.length) {
//     pre = args[0]
//   } else {
//     pre = this[0]
//     start = 1
//   }
//   for (let i = start; i < this.length; i++) {
//     pre = callback(pre, this[i], i, this)
//   }
//   return pre
// }

// const res = singers.my_reduce((pre, next, index, arr) => {
//   return pre + next.num
// }, 1)
// console.log(res);