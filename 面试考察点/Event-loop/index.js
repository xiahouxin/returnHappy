console.log("script start");
// async表示当前这个函数内部可以存在异步（await）
async function async1() {
  await async2(); //加了await的代码会立即执行，且后面的代码会阻塞（会导致后面的代码去到下一次的微任务队列中）
  console.log("async1 end");
}
async function async2() {
  console.log("async2 end");
}
async1();
setTimeout(function () {
  console.log("setTimeout");
}, 0);
new Promise((resolve) => {
  console.log("Promise");
  resolve();
})
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });
console.log("script end");

// script start
// async2 end
// Promise
// script end
// ----本来在这边v8违反规定，将await后面的代码提上一个循环的微任务队列
// promise1
// promise2
// setTimeout
// async1 end----

// 必问

//     #浏览器中的event- _Loop
//     当j s代码在执行时，就是往调用栈中放进去函数，再执行，但是!如果遇到异步函数，异步函数就会被挂起，并在调用栈为空的时候拿出来执行。

//     从任务队列中提取函数出来执行是分两种情况:
// 1.微任务 (microtask)

// 2.宏任务(macrotask)

// 微任务: process. nextTick, prrse. then, Mutat ionObserver

// 宏任务: script, setTimeout, setInterval, setImmediate, I/0, UI- rendering

// # . event-loop顺序:

// 1.首先执行同步代码，这属于宏任务

// 2.当执行完所有的同步代码后，执行栈为空， 查询是否有异步代码要执行

// 3.执行所有的微任务

// 4.当所有的微任务执行完毕之后，有需要的话会渲染页面

// 5.开启下一次的Event-Loop,执行宏任务中的异步代码
