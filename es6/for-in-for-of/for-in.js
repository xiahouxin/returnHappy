// const obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }

// console.log(Object.keys(obj));
// for (let key of Object.keys(obj)) {
//   console.log(key);
// }


// Array.prototype.d = 'd'
// const arr = ['a', 'b', 'c']
// // arr.name = 'qm'
// // arr.push('d')

// for (let i of arr) {
//   console.log(i);
// } 




// Object.prototype.d = 4;
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// obj.e = 5

// Array.prototype.d = 'd'
// const arr = ['a', 'b', 'c']
// arr.name = '芳伟'

// for (let i in arr) {
//   console.log(i);  //0、1、2、name、d
// }



function Foo() {
  this[100] = 'test-100'
  this[1] = 'test-1'
  this['b'] = 'bar-B'
  this[50] = 'test-50'
  this[9] = 'test-9'
  this[8] = 'test-8'
  this[3] = 'test-3'
  this[5] = 'test-5'
  this['C'] = 'test-C'
  this['A'] = 'test-A'
  
}
let bar = new Foo()
for (let key in bar) {
  console.log(`index: ${key}  value: ${bar[key]}`);
}

// 对象中的数字属性会被优先遍历，且按照顺序遍历

// ECMAScript 规范定义了 「数字属性应该按照索引值的大小升序排列， 字符串属性根据创建时的顺序升序排列 」