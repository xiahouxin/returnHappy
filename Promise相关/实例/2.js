//解决回调地狱问题
//需求1:写一个promise函数，来解决回调地域问题
//需求2:将需求1的函数改写成async函数
// let t = setTimeout(() => {
//   console.log(111);
//   let ti = setTimeout(() => {
//     console.log(222);
//     let t2 = setTimeout(() => {
//       console.log(333);
//     }, 3000);
//   }, 2000);
// }, 1000);

//需求1
function fn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(111);
      resolve();
    }, 1000);
  }).then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(222);
        resolve();
      }, 1000);
    }).then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(333);
          resolve();
        }, 1000);
      });
    });
  });
}
// fn()

//需求2
async function fun() {
  const res1 = await fn();
//   console.log();
  // const res2 = await fn(res1);
  // const res3 = await fn(res2);
}
fun();
