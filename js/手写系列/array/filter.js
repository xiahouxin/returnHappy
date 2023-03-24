const singers = [
  { name: '许嵩', num: 200 },
  { name: '周杰伦', num: 343 },
  { name: '林俊杰', num: 123 },
  { name: '陈奕迅', num: 432 },
  { name: '薛之谦', num: 543 }
]

// const res = singers.filter((item, index, arr) => {
//   // console.log(item, index, arr);
//   return item.num > 300
// })
// console.log(res);

Array.prototype.my_filter = function(callback) {
  const res = []
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this) && res.push(this[i])
  }
  return res
}

console.log(singers.my_filter(item => item.num > 300));