console.log('script start')
async function async1() {
  let arr= await async2()
  console.log(arr);
  console.log('async1 end')
}
async function async2() {
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
  resolve()
})
  .then(function () {
    console.log('promise1')
  })
  .then(function () {
    console.log('promise2')
  })
  .then(function () {
    console.log('promise3')
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
