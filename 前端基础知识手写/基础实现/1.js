// function shallowCopy(obj) {
//   let result = {};
//   for (let key in obj) {
//     if (!result.hasOwnProperty(key)) {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// }
function shallowCopy(obj) {
  let result = {};
  for (let key in obj) {
    if (!result.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
let m = { a: 1, b: ["name", "xxx"], c: /^g/, d: { e: 1 } };
n = shallowCopy(m);
n.b[0] = 3;
console.log(n);
console.log(m);
