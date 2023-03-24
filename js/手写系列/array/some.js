const singers = [
  { name: '许嵩', num: 200 },
  { name: '周杰伦', num: 343 },
  { name: '林俊杰', num: 123 },
  { name: '陈奕迅', num: 432 },
  { name: '薛之谦', num: 543 }
]

// 只要存在满足条件的就行，哪怕只有一条
// const res = singers.some((item, index, arr) => {
//   // console.log(item, index, arr);
//   return item.num > 500
// })
// console.log(res);


Array.prototype.my_some = function(callback) {
  let flag = false
  for (let i = 0; i < this.length; i++) {
    flag = callback(this[i], i, this)
    if (flag) break
  }
  return flag
}

const res = singers.my_some((item, index, arr) => {
  return item.num > 600
})

console.log(res);