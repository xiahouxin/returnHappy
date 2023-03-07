// console.log(~~(101/9));
// console.log(new Date());
// console.log(Date());


// let a=2
// let arr={
//     x:3
// }
// delete a
// delete 2
// delete arr.x
// console.log(a);
// console.log(arr.x);
// console.log(2);

let str='abcde'
let arr=[ 'a', 'b', 'c', 'd', 'e' ]
// console.log(str.slice(1,3));
console.log(arr.splice(2,3));  // 会改变数组  2表示开始索引，3表示切割个数
// console.log(arr.slice(1,3));  // 不会会改变数组  1表示开始索引，3表示结束索引
console.log(arr);