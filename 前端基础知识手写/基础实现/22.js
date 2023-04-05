// 最傻逼的柯里化;
// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

//这种方法的缺陷就在于要调用alert才会输出
// function add() {
//   let args = [...arguments];
//   let inner = function () {
//     args.push(...arguments);
//     return inner;
//   };
//   inner.toString = function () {
//     let sum = args.reduce((pre, cru) => {
//       return pre + cru;
//     }, 0);
//     return sum;
//   };
//   return inner;
// }

function add() {
  var _args = Array.prototype.slice.call(arguments);
  var _adder = function () {
    _args.push(...arguments);
    return _adder;
  };
  _adder.toString = function () {
    return _args.reduce((pre, cru) => {
      return pre + cru;
    }, 0);
  };
  return _adder;
}
let a = add(1)(2)(3);
let b = add(2, 3)(1)(3, 4)();
console.log(a.toString());
console.log(b.toString());
