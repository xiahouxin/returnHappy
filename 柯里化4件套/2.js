// function curry(fn) {
//   let arg = [...arguments].slice(1);
//   let temp = function temp() {
//     arg = [...arg, ...arguments];
//     return curry(fn, ...arg);
//   };
//   temp.toString = function () {
//     return fn.apply(null, arg);
//   };
//   return temp;
// }

function curry(fn) {
  let arg = [...arguments].slice(1);
  let temp = function temp() {
    arg = [...arg, ...arguments];
    return curry(fn, ...arg);
  };
  temp.toString = function () {
    return fn.apply(null, arg);
  };
  return temp;
}
function fn() {
  return [...arguments].reduce((pre, cru) => {
    return pre + cru;
  }, 0);
}
let test = curry(fn);
console.log(test(1, 2)(2, 3)(4).toString());
