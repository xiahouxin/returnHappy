const singers = [
  { name: '许嵩', num: 200 },
  { name: '周杰伦', num: 343 },
  { name: '林俊杰', num: 123 },
  { name: '陈奕迅', num: 432 },
  { name: '薛之谦', num: 543 }
]

// const res = singers.map((item, index, arr) => {
//   // console.log(item, index, arr);
//   // return item.num
// })
// console.log(res);

Array.prototype.my_map = function(callback) {
  const res = []
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this))
  }
  return res
}

const result = singers.my_map((item, index, arr) => {
    // console.log(item, index, arr);
    return `${item.name} - ${item.num} - ${index}`
})

console.log(result);