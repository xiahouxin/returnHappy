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


// 字符串测试
// console.log('2'>'13');  //true
// console.log('b'<'ac');  //false
// console.log(['2','13'].sort((a,b)=>a-b));  //['2','13']
// console.log(['b','ac'].sort((a,b)=>a-b));  //[ 'b', 'ac' ]
// console.log(['ac','b'].sort((a,b)=>a-b));  //[ 'ac', 'b' ]
// console.log(['ac',2,1,'b',11,6,3].sort((a,b)=>a-b));  //['ac', 1, 2, 'b',  3, 6,11]