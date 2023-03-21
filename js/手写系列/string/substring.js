const str = 'abcdefghijk'

// console.log(str.substring(0, 4));  // start > end 互换值


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