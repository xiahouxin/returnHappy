// var b = {
//   name: 'aa'
// }
// function a(e, ee) {
//   console.log(this.name);
//   return e + ee
// }
// // a.apply(b, [1, 2])

// Function.prototype.myapply = function(context) {
//   if (typeof this !== 'function') {
//     throw new TypeError('Error')
//   }

//   context = context || window
//   context.fn = this
//   let result = context.fn(...arguments[1])
//   delete context.fn
//   return result
// }

// a.myapply(b, [1, 2])

var b = {
  name: 'aa'
}
function a(e, ee) {
  console.log(this.name);
  return e + ee
}
a.apply(b, [1, 2])

// ------------------------------------------------------------终极版本 法一
// Function.prototype.myApply=function(context){
//   if (typeof this !== 'function') {
//         throw new TypeError('Error')
//   }

//   context=context || window
//   let key=Symbol('key')
//   context[key]=this
//   let result=context[key](...arguments[1])
//   delete context[key]
//   return result
// }
// ------------------------------------------------------------终极版本 法二
Function.prototype.myApply=function(context,[...args]){
  if (typeof this !== 'function') {
        throw new TypeError('Error')
  }

  context=context || window
  let key=Symbol('key')
  context[key]=this
  // console.log(args,1111);
  let result=context[key](...args)
  delete context[key]
  return result
}
let result= a.myApply(b, [1, 2])
console.log(result);