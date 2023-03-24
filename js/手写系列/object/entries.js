const obj = {
  name: '蜗牛',
  age: 18,
  gender: '男'
}
// Object.entries(obj)将对象转换成键值数组
// const res = Object.entries(obj)
// console.log(res);

Object.prototype.my_entries = function(obj) {
  const res = []
  for (let key in obj) {
    obj.hasOwnProperty(key) && res.push([key, obj[key]])
  }
  return res
}

const res = Object.my_entries(obj)
console.log(res);