const singers = [
  { name: '许嵩', num: 200 },
  { name: '周杰伦', num: 343 },
  { name: '林俊杰', num: 123 },
  { name: '陈奕迅', num: 432 },
  { name: '薛之谦', num: 543 }
]

// const index = singers.findIndex((item, index, arr) => {
//   // console.log(item, index, arr);
//   return item.name === '周杰伦123'
// })
// console.log(index);

Array.prototype.my_findIndex = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i
    }
  }
  return -1
}
const index = singers.my_findIndex((item, index, arr) => {
  return item.name === '周杰伦11'
})
console.log(index);