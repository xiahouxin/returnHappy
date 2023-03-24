const singers = [
  { name: '许嵩', num: 200 },
  { name: '周杰伦', num: 343 },
  { name: '林俊杰', num: 123 },
  { name: '陈奕迅', num: 432 },
  { name: '薛之谦', num: 543 }
]

// const res = singers.fill('刘德华', 1, 3)
// console.log(res);

Array.prototype.my_fill = function(value, start = 0, end) {
  end = end || this.length
  for (let i = start; i < end; i++) {
    this[i] = value
  }
  return this
}
const res = singers.fill('刘德华', 1)
console.log(singers);