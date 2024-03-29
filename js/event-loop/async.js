
function testSometing() {  
    
    // return "testSometing";
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
            console.log("执行testSometing");
            resolve('testSometing')
        // }, 3000);
    })
}

// function testAsync() {  
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("执行testAsync");
//             resolve('hello async')
//         }, 5000);
//     })
// }

async function testAsync() {
    console.log("执行testAsync");
    return Promise.resolve("hello async");
}

async function test() {
    console.log("test start...");
    const v1 = await testSometing();   //我的理解是await后面代码立即执行，下面代码阻塞，执行完后面代码js线程跳出来（此时下面代码进入微任务队列(只有await后面代码执行完成了下面代码才立即进入微任务)）执行外面代码，等外面代码执行完再回到下面代码执行
    console.log(v1);
    const v2 = await testAsync();
    console.log(v2);
    console.log(v1, v2);
}

test();

var promise1 = new Promise((resolve) => { console.log("promise start.."); resolve("promise1"); });//3
var promise2 = new Promise((resolve) => {  resolve("promise2"); });//3
promise1.then((val) => console.log(val));
promise2.then((val) => console.log(val));
setTimeout(() => {
    console.log('全局setTimeout');
}, 4000);

console.log("test end...")
