// var b = {
//   name: 'aa'
// }
// function a(e, ee) {
//   console.log(this.name);
//   console.log(e + ee);
// }
// let c = a.bind(1, 2)
// c()






// Function.prototype.mybind = function(context) {
//   if (typeof this !== 'function') {
//     throw new TypeError('Error')
//   }
//   let _this = this
//   context = context || window
//   let args = [...arguments].slice(1)
//   return function F() {
//     // 把this代表的函数执行掉
//     _this.apply(context, args.concat(...arguments)) // b.a()
//   }
// }

// let c = a.mybind(b, 1, 1)
// c(1, 2)



var b = {
  name: 'aa'
}
function a(e, ee) {
  console.log(this.name);
  return e + ee
}
let c = a.mybind(b, 1)
c(1, 2)
// -------------------------------------------------------终极版本
Function.prototype.myBind=function(context){
  if (typeof this !== 'function') {
        throw new TypeError('Error')
  }
  context=context||window
  let _this=this
  let arr=[...arguments].slice(1)
  return function F(){
    // 如果F（bar）被new，则this.__proto__=F.prototype
    if(this instanceof F){
      return new _this(...arguments)
    }
    return _this.apply(context,[...arr,...arguments])
  }

}
let bar=a.myBind(b,11)
// let baz=new bar(12,23)
// console.log(baz);
console.log(bar(22));