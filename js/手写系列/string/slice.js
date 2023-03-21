const str = 'abcdefghijk'


// const newStr = str.slice(-7, 5) // start end    start = 字符串长度 + start
// console.log(newStr);

String.prototype.my_slice = function(start = 0, end) {
  start = start < 0 ? this.length + start : start
  end = (!end && end !== 0) ? this.length : end

  let str = ''
  for (let i = start; i < end; i++) {
    str += this[i]
  }
  return str
}

const newStr = str.slice(-7)
console.log(newStr);