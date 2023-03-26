// function getJSON(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('json');
//       resolve('ok')
//     }, time)
//   })
// }

// // async表示当前这个函数内部可以存在异步
// let count=0
// async function testAsync(time) {
//   await getJSON(time) // 加了await的代码会立即执行，且后面的代码会被阻塞
//   console.log(++count,'数据已经拿到了');
// }
// testAsync(5000)
// console.log(1111);
// testAsync(1000)


/**
 * 传入参数 n，表示这个函数执行的时间（毫秒）
 * 执行的结果是 n + 200，这个值将用于下一步骤
 */
 function takeLongTime(n) {
  return new Promise(resolve => {
      setTimeout(() => resolve(n + 200), n);
  });
}

function step1(n) {
  console.log(`step1 with ${n}`);
  return takeLongTime(n);
}

function step2(n) {
  console.log(`step2 with ${n}`);
  return takeLongTime(n);
}

function step3(n) {
  console.log(`step3 with ${n}`);
  return takeLongTime(n);
}

function doIt(){
  console.time('doIt');
  let time1 = 300;
  step1(time1)
      .then((time2) => step2(time2))  //time2==500
      .then((time3) => step3(time3))  //time3==700
      .then((result) => {             //result==900
          console.log(`result is ${result}`);
          console.timeEnd("doIt");
      })
}

doIt();

//执行结果为:
//step1 with 300
//step2 with 500
//step3 with 700
//result is 900
//doIt: 1510.2490234375ms

