function foo() {
  // console.log(this.a);
  //  this
  // let a=111
  // this.a=33333  
  // console.log(this.a);
  return (a) => {
    console.log(a,'a');
    console.log(this.a,'this.a');
  }
}
let a=22222

var obj1 = {
  a: 2
}
var obj2 = {
  a: 3
}
// var bar = foo()
// bar.call(obj2,222)

var bar = foo.call(obj1)   //因为this.a=33333，所以obj1.a已经被修改了
var fun = foo()
bar.call(obj2)
// console.log(obj1.a);
fun()


// 箭头函数中没有this概念，看到this关键字，也不是代表自己的作用域
// 箭头函数中this代表的是该函数外层的function的作用域



// function foo() {
//   let _this = this
//   setTimeout(function() {
//     console.log(_this.a);
//   }, 100)
// }
// var obj = {
//   a: 2
// }
// foo.call(obj) // 




// this.a=111
// let a=222
// let bbar=()=>{
//   // this.a=333
//   console.log(this.a);
// }
// bbar()
// console.log(this.a);


