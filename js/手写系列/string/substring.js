const str = 'abcdefghijk'

// console.log(str.substring(0, 4));  // start > end 互换值    substring无法接受负值参数，小于 0 的开始或结束值被视为 0。


String.prototype.my_substring = function(start = 0, end) {
  start = start < 0 ? this.length + start : start
  end = (!end && end !== 0) ? this.length : end

  if (start > end) [start, end] = [end, start]
  let str = ''
  for (let i = start; i < end; i++) {
    str += this[i]
  }
  return str
}

console.log(str.my_substring(4, 0));