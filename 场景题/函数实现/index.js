// # 输出所有value大于2的
let obj = {a:1, b:3, c:5}  
let a=Object.fromEntries(Object.entries(obj).filter(([key,value],index)=> value>2 ))
let obj2=Object.fromEntries([['aa',11],['bb',22],['cc',33]])
// console.log(obj2);
// console.log(Object.entries(obj));

let max=2*31-1
console.log(max);
console.log(-2147483648>-max);
console.log('abcdefg'.slice(2,4));

