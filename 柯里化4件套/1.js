// function curry(fn) {
//   let length = fn.length;
//   return function temp() {
//     let arg = [...arguments];
//     if (arg.length >= length) {
//       return fn(...arg);
//     } else {
//       return function () {
//         return temp(...arg, ...arguments);
//       };
//     }
//   };
// }
// //实现一个固定参数的curry函数
// function add(a, b, c) {
//   return a + b + c;
// }
// let test = curry(add);
// console.log(test(1)(2, 3));
// console.log(test(1)(2)(3));
// const curry = (fn) => {
//   let length = fn.length;
//   return function temp() {
//     let arg = [...arguments];
//     if (arg.length >= length) {
//       return fn(...arg);
//     } else {
//       return function () {
//         return temp(...arg, ...arguments);
//       };
//     }
//   };
// };

const curry = (fn) => {
  let length = fn.length;
  return function temp() {
    let arg = [...arguments];
    if (arg.length >= length) {
      return fn(...arg);
    } else {
      return function () {
        return temp(...arg, ...arguments);
      };
    }
  };
};
function add(a, b, c) {
  return a + b + c;
}

let test = curry(add);
console.log(test(1)(2, 3));
