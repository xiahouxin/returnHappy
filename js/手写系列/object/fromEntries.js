const arr = [ [ 'name', '蜗牛' ], [ 'age', 18 ], [ 'gender', '男' ] ]

// Object.fromEntries(arr)是将数组转换成对象

// console.log(Object.fromEntries(arr)); // { name: '蜗牛', age: 18, gender: '男' }


Object.prototype.my_fromEntries = function(arr) {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    const [key, value] = arr[i]
    obj[key] = value
  }
  return obj
}

console.log(Object.my_fromEntries(arr));

