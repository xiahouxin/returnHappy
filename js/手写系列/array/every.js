const singers = [
  { name: '许嵩', num: 200 },
  { name: '周杰伦', num: 343 },
  { name: '林俊杰', num: 123 },
  { name: '陈奕迅', num: 432 },
  { name: '薛之谦', num: 543 }
]
// every会遍历数组，遍历到的项必须全部满足条件才会返回true，
// 没有写条件时返回false,当返回了第一个false之后就不在遍历

// const res = singers.every((item, index, arr) => {
//   console.log(item);
//   // return item.num > 400
// })
// console.log(res);


Array.prototype.my_every = function(callback) {
  let flag = false
  for (let i = 0; i < this.length; i++) {
    flag = callback(this[i], i, this) || false
    if (!flag) break
  }
  return flag
}

const res = singers.my_every((item, index, arr) => {
  // console.log(item);
  return item.num > 100
})

console.log(res);