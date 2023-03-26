console.log('script start')
async function async1() {
  let arr= await async2()
  console.log(arr);
  console.log('async1 end')
}
async function async2() {                      //async会影响答案
  return new Promise((resolve,reject)=>{
      console.log('async2 end')
      resolve('okk')
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
console.log('script end')

// script start
// async2 end
// Promise
// script end
// async1 end -----
// promise1
// promise2
// setTimeout
