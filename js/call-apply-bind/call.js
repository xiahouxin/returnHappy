// var b = {
//   name: 'aa',
//   // a: function() {
//   //   console.log(this.name);
//   // }
// }
// function a(e, ee) {
//   console.log(this.name);
//   return e + ee
// }
// let res = a.call(b, 3, 4)
// console.log(res);


// var c = {}
// // b.a() 


// a.test()

// Function.prototype.mycall = function(context) {
//   // 调用call的是this
//   if (typeof this !== 'function') {
//     // 如果调用我的不是个函数，就报错
//     throw new TypeError('Error')
//   }
//   context = context || window

//   const args = [...arguments].slice(1)

//   // 把调用的我的那个函数获取到，复制到context对象中去
//   context.fn = this

//   let result = context.fn(...args)
//   delete context.fn
//   return result
// }


// a.mycall(b, 1, 2)


var b = {
  name: 'aa'
}
function a(e, ee) {
  console.log(this.name);
  return e + ee
}
a.call(b,1,2)
// ------------------------------------------------------终极版本 法一
// Function.prototype.myCall=function(context){
//   if(typeof this!=='function'){
//     throw new TypeError('Error')
//   }
//   context=context||window
//   let arr=Array.from(arguments).slice(1)
//   let key=Symbol('key')
//   context[key]=this
//   let result=context[key](...arr)
//   delete context[key]
//   return result
// }
// ------------------------------------------------------终极版本 法二
Function.prototype.myCall=function(context,...args){
  if(typeof this!=='function'){
    throw new TypeError('Error')
  }
  context=context||window
  let key=Symbol('key')
  context[key]=this
  let result=context[key](...args)
  delete context[key]
  return result
}
console.log(a.myCall(b,1,22));