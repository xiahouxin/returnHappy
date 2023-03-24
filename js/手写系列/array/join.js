const arr = [1, 2, 3, 4, 5]

// const str = arr.join()
// console.log(str);


Array.prototype.my_join = function(s = ',') {
  let str = ''
  for (let i = 0; i < this.length; i++) {
    str = i === 0 ? `${str}${this[i]}` : `${str}${s}${this[i]}`
  }
  return str
}

const str = arr.my_join('+')
console.log(str);