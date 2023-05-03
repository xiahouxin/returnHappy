// 包装类

// 原始值是不能有属性和方法的，属性和方法只有对象才能有，这是对象独有的！！！

// var num = 123
// num.abc = 'aaa'
// console.log(num.aaa);


// var num = new Number(123)
// num.abc = 'aaa'
// console.log(num.abc); // aaa
// console.log(num * 2); // 246
// num在参与了四则运算之后又变回了数字，不参与运算它还能当做对象来使，能有属性能有方法


// var str = 'abcd'
// console.log(str.length);


// var num = 4
// num.len = 3
// console.log(num.len); // 既然不能有属性，为什么不报错




// 在原始值身上调用属性,会隐式的发生一个过程
// var num = 4
// num.len = 3

// var num = new Number(4)    // 类型包装
// // num.len = 3
// // delete num.len
// console.log(num.len);  //  new Number(4).len



// 考点
var arr = [1, 2, 3, 4, 5]
arr.length = 2
console.log(arr); // [1, 2]

var str = 'abcd'
str.length = 2
// new String('abcd').length = 2; delete 
console.log(str); // 'abcd'
console.log(str.length); // new String('abcd').length



// 阿里面试题
var str = 'abc'
str += 1 // 'abc1'
var test = typeof(str) // 'string'
if (test.length == 6) {
  test.sign = 'typeof的返回结果可能是String'
  // new String(test).sign = 'xxxx'   delete
}
// new String(test).sign
console.log(test.sign);  // undefined ?



