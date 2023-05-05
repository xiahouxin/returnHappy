// 允许手动执行垃圾回收机制

global.gc(); // 强制节点运行垃圾回收

let obj = { name: '诺克萨斯', age: new Array(5 * 1024 * 1024) } 
let ws = new WeakSet();
ws.add(obj);
global.gc();

obj = null;
global.gc();
console.log(process.memoryUsage());

// global.gc();
// process.memoryUsage(); // heapUsed: 46755856 ≈ 44.6M