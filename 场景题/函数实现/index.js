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

// 字符串大小写反写
let str = "zhufeng2019zhufeng2029";
str = str.replace(/zhufeng/g, function (...g) {});
/* 如何把一个字符串的大小写反写(大写变小写，小写变大写),例如‘AbC’变成‘aBc’ */
let strs = "zhufengPEIxun的xxx老师很帅!,哦*100!HaHa";
strs = strs.replace(/[a-zA-Z]/g, (content) => {
  //content:每一次正则匹配的结果
  //验证是否为大写字母:把字母转换为大写后看和之前是否一样,如果一样,之前也是大写的;在
  //ASCII表中找到大写字母的取值范围进行判断;
  //content.toUpperCase() === content;
  //content.charCodeAt()>=65&&content.charCodeAt()<=90
  return content.toUpperCase() === content
    ? content.toLowerCase()
    : content.toUpperCase();
});
console.log(strs);
