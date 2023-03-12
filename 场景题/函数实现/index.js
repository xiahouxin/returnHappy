// # 输出所有value大于2的
let obj = {a:1, b:3, c:5}  
let a=Object.fromEntries(Object.entries(obj).filter(([key,value],index)=> value>2 ))
let obj2=Object.fromEntries([['aa',11],['bb',22],['cc',33]])
// console.log(obj2);
// console.log(Object.entries(obj));

// # 字符串
let str = 'Hello world!';

console.log(str.includes('o'));  // 输出结果：true
