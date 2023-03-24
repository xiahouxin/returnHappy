const singers = [
  { name: '许嵩', num: 200 },
  { name: '周杰伦', num: 343 },
  { name: '林俊杰', num: 123 },
  { name: '陈奕迅', num: 432 },
  { name: '薛之谦', num: 543 }
]

// singers.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// })

Array.prototype.my_forEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

singers.my_forEach((item, index, arr) => {
  console.log(item, index);
})