function createIterator(items) {
  var i = 0;
  return {
    next: function() {
      var done = i >= items.length
      var val = !done ? items[i++] : undefined
      return {
        done: done,
        value: val
      }
    }
  }
}


var names = ['叶老板', '强哥', '国强']

names[Symbol.iterator] = function() {
  return createIterator([1, 2, 3])
}

// for (let name of names) {
//   console.log(name);
// }


// 数组
// Set
// Map
// 类数组
// 字符串
// Generator对象




function forOf(obj, cb) {
  let iterable,result;

  if (typeof obj[Symbol.iterator] !== "function") {
    throw new TypeError (result + 'is not iterable')
  }

  iterable = obj[Symbol.iterator]()
  result = iterable.next() // { done: false, value: 1 }

  while(!result.done) {
    cb(result.value)
    result = iterable.next()
  }
}

forOf([1, 2, 3], (item) => {
  console.log(item); // 1, 2, 3
})

[1, 2, 3].forEach(item => {
  console.log(item);
});