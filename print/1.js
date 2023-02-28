function foo() {
    console.log(a); 
    a = 1;
}

foo(); // ???

function bar() {
    a = 1;  //被挂载到全局对象上
    console.log(a);
}
bar(); // ???
console.log(a);

// 第一段会报错：Uncaught ReferenceError: a is not defined。

// 第二段会打印：1。

// 这是因为函数中的 "a" 并没有通过 var 关键字声明，所有不会被存放在 AO 中。

// 第一段执行 console 的时候， AO 的值是：

// AO = {
//     arguments: {
//         length: 0
//     }
// }
// 没有 a 的值，然后就会到全局去找，全局也没有，所以会报错。

// 当第二段执行 console 的时候，全局对象已经被赋予了 a 属性，这时候就可以从全局找到 a 的值，所以会打印 1。