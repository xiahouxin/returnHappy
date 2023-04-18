//输出题1

// (function () {
//   var x = (y = 1);
// })();
// var z;
// console.log(y); // 1
// console.log(z); // undefined
// console.log(x); // Uncaught ReferenceError: x is not defined


//输出题2
// var a, b;
// (function () {
//   console.log(a);
//   console.log(b);
//   var a = (b = 3);
//   console.log(a);
//   console.log(b);
// })();
// console.log(a);
// console.log(b);

//输出题3
// var friendName = "World";
// (function () {
//   if (typeof friendName === "undefined") {
//     var friendName = "Jack";
//     console.log("Goodbye " + friendName);
//   } else {
//     console.log("Hello " + friendName);
//   }
//   console.log(friendName);
// })();


//输出题4
// function fn1() {
//   console.log("fn1");
// }
// var fn2;
// fn1();
// fn2();
// function fn2() {
//   console.log("fn2");
// };
fn2();


//输出题5
function a() {
  var temp = 10;
  function b() {
    console.log(temp); // 10
  }
  b();
}
a();
function a() {
  var temp = 10;
  b();
}
function b() {
  console.log(temp); // 报错 Uncaught ReferenceError: temp is not defined
}
a();

