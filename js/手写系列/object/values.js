const obj = {
  name: '蜗牛',
  age: 18,
  gender: '男'
}

// console.log(Object.values(obj));


Object.prototype.my_values = function(obj) {
  const keys = []
  for (let key in obj) {
    obj.hasOwnProperty(key) && keys.push(obj[key])
  }
  return keys
}

console.log(Object.my_values(obj));