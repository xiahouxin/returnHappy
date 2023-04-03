//数组扁平化实现
let ary = [[132, 42, [1, 23, [1, 3, 4], 5], 1], 3, 4, [13, [23, 3]]];
// function flatten(ary) {
//   let arr = [];
//   function flat(ary) {
//     for (let i = 0; i < ary.length; i++) {
//       if (Array.isArray(ary[i])) {
//         flat(ary[i]);
//       } else {
//         arr.push(ary[i]);
//       }
//     }
//   }
//   flat(ary);
//   return arr;
// }
// function flatten(arr) {
//   return arr.reduce((pre, cru) => {
//     return pre.concat(Array.isArray(cru) ? flatten(cru) : cru);
//   }, []);
// }
const flatten = (arr) => {
  return arr.reduce((pre, cru) => {
    return pre.concat(Array.isArray(cru) ? flatten(cru) : cru);
  }, []);
};
[1, [2, 3], 4];
console.log(flatten(ary));