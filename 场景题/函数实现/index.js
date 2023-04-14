// # 输出所有value大于2的
let obj = { a: 1, b: 3, c: 5 };
let a = Object.fromEntries(
  Object.entries(obj).filter(([key, value], index) => value > 2)
);
let obj2 = Object.fromEntries([
  ["aa", 11],
  ["bb", 22],
  ["cc", 33],
]);
// console.log(obj2);
// console.log(Object.entries(obj));

let max = 2 * 31 - 1;
console.log(max);
console.log(-2147483648 > -max);
console.log("abcdefg".slice(2, 4));


// 拦截火箭
function getNum(arr1, arr2) {
  let res = [],
    index = 0,
    j = 0;
  for (let key of arr1) {
    res.push(key / arr2[j]);
    j++;
  }
  res = res.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < res.length; i++) {
    if (res[i] > index) {
      index++;
    } else {
      return index;
    }
  }
  return index;
}
console.log(getNum([3, 4, 5], [5, 4, 3]));
console.log(getNum([1, 2, 3], [1, 1, 1]));
