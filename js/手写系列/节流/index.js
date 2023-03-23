// 在规定的时间内只触发一次
// 节流 - throttle 当持续触发事件时，保证一定时间段内只调用一次事件处理函数。
// index.js
function throttle(fn, delay = 1000) {
  let prev = Date.now()
  return function() {
    let now = Date.now()
    let arg = arguments
    if (now - prev >= delay) {
      fn.apply(this, arg)
      prev = Date.now()
    }
  }
}


//定义：当持续触发事件时，保证隔间时间触发一次事件。
//1. 懒加载、滚动加载、加载更多或监听滚动条位置；
//2. 百度搜索框，搜索联想功能；
//3. 防止高频点击提交，防止表单重复提交；
// function throttle(fn,wait){
//   let pre = Date.now();
//   return function(...args){
//       let now = Date.now();
//       if( now - pre >= wait){
//           fn.apply(this,args);
//           pre = now;
//       }
//   }
// }
// function handle(){
//   console.log(Math.random());
// }
// window.addEventListener("mousemove",throttle(handle,1000));