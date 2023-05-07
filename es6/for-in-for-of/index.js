var names = ['叶老板', '强哥', '国强']
// for (var i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }


// 原生的迭代器原理
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

var iterator = createIterator([1, 2, 3])
// console.log(iterator.next()); // { done: false, value: 1 }
// console.log(iterator.next()); // { done: false, value: 2 }
// console.log(iterator.next()); // { done: false, value: 3 }
// console.log(iterator.next()); // { done: true, value: undefined }

// for (let value of iterator) {
//   console.log(value);
// }


// Symbol.iterator  能遍历的数据结构都具备该属性



var obj = {  //对象本身没有Symbol.iterator属性
  value: 1
}
obj[Symbol.iterator] = function() {
  return createIterator([1, 2, 3])
}
// obj[Symbol.iterator] =createIterator([1, 2, 3])


for (let value of obj) {
  console.log(value);
}