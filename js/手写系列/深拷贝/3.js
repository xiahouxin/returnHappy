// let arr = [1, 2, 3, 4, {name:'xhx'}]
// JSON.parse(JSON.stringify(arr))（深拷贝）：如果对象中存在循环引用，你会发现程序会报错。
// 同时在遇到不支持的数据类型，比如函数、 undefined 或者 symbol 的时候，这些属性都会被忽略

// let a = JSON.parse(JSON.stringify(arr)) // JSON.parse(JSON.stringify(arr))  // arr.slice(0)   // [...arr]  // [].concat(arr)
// let b=arr.slice(0)
// let c=[...arr]
// let d=[].concat(arr)
// arr[0] = 0
// arr[4].name='plmm'
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

//浅拷贝 
// 1. Object.assign(target,source)
// 2. es6对象扩展运算符。


//深拷贝    
function deepClone(obj) {
      if (!obj || typeof obj !== "object") return;
      let newObj = Array.isArray(obj) ? [] : {};
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          newObj[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
        }
      }
      return newObj;
}
// 数组扁平化
// function flatten(arr) {
//   return arr.reduce((result, item) => {
//     return result.concat(Array.isArray(item) ? flatten(item) : item);
//   }, []);
// }
// let arr=[1,[2,2],[3,4,[5,6]]]
// console.log(flatten(arr));


// ===================================
// 如果你所需拷贝的对象含有内置类型并且不包含函数，可以使用 MessageChannel。这个接口允许我们创建一个新的消息通道，并通过它的两个MessagePort 属性发送数据。
function structuralClone(obj) {
  return new Promise(resolve => {
    const { port1, port2 } = new MessageChannel()  //返回一个带有两个 MessagePort 属性的 MessageChannel 新对象。
    port1.onmessage = ev => resolve(ev.data)
    port2.postMessage(obj)
  })
}

var obj = {
  a: 1,
  b: {
    c: 2
  }
}

obj.b.d = obj.b

// 注意该方法是异步的
// 可以处理 undefined 和循环引用对象
const test = async () => {
  const clone = await structuralClone(obj)
  console.log(clone)
}
test()