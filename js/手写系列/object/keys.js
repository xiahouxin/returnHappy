const obj = {
  name: '蜗牛',
  age: 18,
  gender: '男'
}

// console.log(Object.keys(obj));

Object.prototype.my_keys = function(obj) {
  const keys = []
  for (let key in obj) {
    obj.hasOwnProperty(key) && keys.push(key)
  }
  return keys
}

console.log(Object.my_keys(obj));