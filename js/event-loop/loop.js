console.log('script start')
async function async1() {
  let arr= await async2()
  console.log(arr);
  console.log('async1 end')
}
async function async2() { 
  // console.log('async2 end')
  // return "okk"                     //async会影响答案
  return new Promise((resolve,reject)=>{
      console.log('async2 end')
      resolve('okk')
  }).then(res=>{   //此处加不加then结果一样的
    console.log('async2返回值内部then');
    return res
  })
}
async1()
setTimeout(function () {
  console.log('setTimeout')
}, 0)
new Promise(resolve => {
  console.log('Promise')
  resolve(123)
})
  .then(function (res) {
    console.log('promise1',res)  //res==123
  })
  .then(function (res) {
    console.log('promise2',res)  //res==undefined
  })
  .then(function (res) {
    console.log('promise3',res)  //res==undefined
  })
  .then(function (res) {
    console.log('promise4',res)  //res==undefined
  })
  .then(function (res) {
    console.log('promise5',res)  //res==undefined
  })
console.log('script end')

// async2函数有async       没有async

// script start
// async2 end
// Promise
// script end
// async2返回值内部then
// promise1 123           okk
// promise2 undefined     async1 end
// okk                    promise1 123
// async1 end             promise2 undefined
// promise3 undefined     promise3 undefined
// setTimeout
