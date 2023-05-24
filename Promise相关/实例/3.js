// 实现输出1,2,3
//  方法1
const timeout = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

const ajax1 = () =>
  timeout(3000).then(() => {
    console.log("1");
    return 11;
  });

const ajax2 = () =>
  timeout(1000).then(() => {
    console.log("2");
    return 22;
  });

const ajax3 = () =>
  timeout(1000).then(() => {
    console.log("3");
    return 33;
  });

const mergePromise = (ajaxArray) => {
  // 在这里实现你的代码
  return new Promise(async (resolve, reject) => {
    let promise=Promise.resolve()
    let data=[]
    ajaxArray.forEach(fun => {
        promise=promise.then(fun).then(res=>{
            data.push(res)
        })
    });
    await promise
    resolve(data)
    // async function func(ajaxArray) {
    //   for (let key of ajaxArray) {
    //     await key();
    //   }
    // }
    // func(ajaxArray);
  });
};
mergePromise([ajax1, ajax2, ajax3]).then((result) => {
  console.log(result,'------------');
});


// 方法2 !!!!!!!!!!!!!!!
// const  asyncFun =  ms => new Promise((resolve,reject)=>{
//     //此处 用 setTimeout 模拟 异步操作
//     setTimeout(()=>{
//         resolve();
//     },ms);
// });
// //asyncFun 最终 会 返回 一个 promise 对象 
// const  fn1 = ()=>asyncFun(6000).then(()=>{
//     console.log(1);
//     return 1;
// });

// const fn2 = ()=> asyncFun(2000).then(()=>{
// console.log(2);
// return 2;
// });

// const fn3 = ()=> asyncFun(1000).then(()=>{
// console.log(3);
// return 3;
// });

// const mergePromise = asyncArray =>{
// return new Promise(async resolve=>{
//     let data = [];
//     //启用 一个 promise 引用    Promise.resolve(value)方法返回一个以给定值解析后的Promise 对象
//     let promise = Promise.resolve();
//     asyncArray.forEach(asyncFun =>{
//         promise = promise.then(asyncFun).then(res=>{
//             data.push(res);
//         });
//     });
//     await promise;
//     resolve(data);
// })
// }

// mergePromise([fn1,fn2,fn3]).then(data=>{
// console.log('done');
// console.log(data);
// })