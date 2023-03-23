// const a = { name: '蜗牛' }
// const b = a
// const c = { name: '蜗牛' }

// // console.log(Object.is(a, b));
// // console.log(Object.is(a, c));
// // console.log(Object.is(+0, +0));  //false

// Object.prototype.my_is = function(x, y) {
//   if (x === y) {
//     return x !== 0 || 1 / x === 1 / y  //防止-0===+0
//   }
//   return x !== x && y !== y  //判断NaN
// }

// console.log(Object.my_is(NaN,NaN));
// console.log(Object.my_is(a, c));
// // console.log(-0===+0); //true


// for (var i = 0; i < 5; i++) {
//   (function(j){
//     setTimeout(() => {
//       console.log(j);
//     }, j*1000);
//   },i)
// } 

// for (var i = 0; i < 5; i++) {
//     setTimeout((j) => {
//       console.log(j);
//     }, i*1000,i);
// } 

function bar(){
  let count=0
  return function(){
    console.log(count++);
  }
}
let foo=bar()
foo()
foo()
foo()
