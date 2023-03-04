<!-- 1.js  process.nextTick -->

# process .nextTick这个函数时独立于Event Loop之 外的，它有一个自己的对列，
# 当每个(当前)阶段完成后，如果存在nextTIck对列，就会清空对列中的所有回调函数，就是说回调将在事件循环继续之前解析
# 并且优于其他mircotask(宏任务)执行


// 注意:在Node环境下，process. nextTick的优先级高于promise也就是:在宏任务结束后会
// 先执行微任务队列中的nextTick部分，然后才会执行微任务中的promise部分。
// 另外，setImmediate则是规定:在下一次Event Loop (宏任务)时触发(所以它是属于优先
// 级较高的宏任务)，(Node. js文档中称，setImmediate指定的回调函数，总是排在setTime
// out前面)，所以setImmediate如果嵌套的话，是需要经过多个Loop才能完成的，而不会像pr
// ocess.nextTick-样没完没了。

// process.nextTick() 从技术上讲不是事件循环的一部分。任何时候在给定的阶段中调用 process.nextTick()，
// 所有传递到 process.nextTick() 的回调将在事件循环继续之前解析。



// 为什么要使用 process.nextTick()?
// 有两个主要原因：

// 允许用户处理错误，清理任何不需要的资源，或者在事件循环继续之前重试请求。
// 有时有让回调在当前栈(tick)结束后、事件循环继续之前运行的必要。