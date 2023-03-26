// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(new Date(), i);
//   }, 1000);
// }

//  console.log(new Date(), i);

//需求1:将上面的代码改写成每隔1s输出0-4
/*
       for (var i = 0; i < 5; i++) {
         (function (i) {
           setTimeout(() => {
             console.log(new Date(), i);
           }, 1000 * i);
         })(i);
       }
       */
//let解决
/*
        for (let i = 0; i < 5; i++) {
         setTimeout(() => {
           console.log(new Date(), i);
         }, 1000 * i);1
       }
       */

//api法
// for (var i = 0; i < 5; i++) {
//   setTimeout(
//     function (j) {
//       console.log(new Date(), j);
//     },1000 * i,i
//   );
// }
//变量法
/*  let time = function (i) {
        setTimeout(() => {
          console.log(i);
        }, 1000);
      };
      for (var i = 0; i < 5; i++) {
        time(i);
      } */

//需求2:用promise的形式实现上述功能
// function sleep(time) {
//   for (var i = 0; i < 5; i++) {
//     Promise.resolve(i).then((result) => {
//       setTimeout(() => {
//         console.log(result);
//       }, time * result);
//     });
//   }
// }
// sleep(1000);

// 模拟其他语言中的 sleep，实际上可以是任何异步操作
(async () => {
  const sleep = (timeountMS) =>
    new Promise((resolve) => {
      setTimeout(resolve, timeountMS);
    });
  for (var i = 0; i < 5; i++) {
    await sleep(1000);
    console.log(i);
  }
})();
// let count=11
// setInterval(() => {
//   console.log(count++);
// }, 1000);
console.log(11111);