// 防抖 - 在规定的时间内，没有触发第二次，则去执行



// index.js
// 函数防抖关注一定时间连续触发，只在最后执行一次，而函数节流侧重于一段时间内只执行一次。
// function debounce(fn, delay) {
//   let timer = null
//   return function() {
//     let arg = arguments
//     // console.log(arg,'args');
//     clearTimeout(timer)
//     timer = setTimeout(() => {
//       fn.apply(this, arg)
//     }, delay)
//   }
// }

//定义：触发事件后在n秒内函数只能执行一次，如果在n秒内又触发了事件，则会重新计算函数执行时间。
//搜索框搜索输入。只需用户最后一次输入完，再发送请求
//手机号、邮箱验证输入检测 onchange oninput事件
//窗口大小Resize。只需窗口调整完成后，计算窗口大小。防止重复渲染。
const debounce = (fn, wait, immediate) => {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    console.log(timer);
    if (immediate && !timer) {
      fn.apply(this, args);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
};
const betterFn = debounce(() => console.log("fn 防抖执行了"), 1000, true);
document.addEventListener("scroll", betterFn);



// 防抖 - debounce 当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时。
// const debounce=(fn,wait,immediate)=>{
//   let timer=null
//   return function(...args){
//     if(timer) clearTimeout(timer)
//     if(immediate&&!timer){
//       fn.apply(this,args)
//     }
//     timer=setTimeout(() => {
//       fn.apply(this,args)
//     }, wait);
//   }
// }