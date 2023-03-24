let test = { name: '薛之谦', num: 543 }
const singers = [
  { name: '许嵩', num: 200 },
  { name: '周杰伦', num: 343 },
  { name: '林俊杰', num: 123 },
  { name: '陈奕迅', num: 432 },
  test,
  1,
  '1',
  NaN
]

// const res = singers.includes(NaN, -1)
// console.log(res);


Array.prototype.my_includes = function(value, start = 0) {
  if (start < 0) start = this.length + start
  const isNaN = Number.isNaN(value)
  for (let i = start; i < this.length; i++) {
    if (this[i] === value || (isNaN && Number.isNaN(this[i]))) {
      return true
    }
  }
  return false
}

const res = singers.my_includes(NaN, -2)
console.log(res);