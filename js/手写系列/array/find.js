const singers = [
  { name: '许嵩', num: 200 },
  { name: '周杰伦', num: 343 },
  { name: '林俊杰', num: 123 },
  { name: '陈奕迅', num: 432 },
  { name: '薛之谦', num: 543 }
]

// const item = singers.find((item, index, arr) => {
//   // console.log(item, index, arr);
//   return item.name === '周杰伦123'
// })
// console.log(item);


Array.prototype.my_find = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i]
    }
  }
  return undefined
}

const item = singers.my_find((item, index, arr) => {
  return item.name === '周杰伦'
})
console.log(item);