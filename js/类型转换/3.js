// console.log(null==null);
// console.log(undefined==undefined);
// console.log(undefined==null);
// console.log(NaN==NaN);

// ----------------------------

// console.log([]+{})  //[object Object]
// console.log([].valueOf());  //[]
// console.log([].toString());  // ''
// console.log({}.valueOf());  //{}
// console.log({}.toString());  //[object Object]

// console.log(1+true)
// console.log(new Date(2021,11,20)+1)  //Mon Dec 20 2021 00:00:00 GMT+0800 (中国标准时间)1
// console.log(new Date(2021,11,20))  //2021-12-19T16:00:00.000Z
// console.log(true==1);  //1

// console.log(true=='2')  //false

// if('2'){
//     console.log(222)
// }

// console.log([]==[])  
// console.log([]==![])
// console.log(null==undefined);
// // []==![]
// // []==false
// // []==0
// // ''==0
// // 0==0

var a=1
function a(){console.log('fun-a');} 
function bar(){
    // var a=2
    a=function (){console.log('fun-aaa');}
    return a
}
console.log(bar());
console.log(a);
console.log(a());
