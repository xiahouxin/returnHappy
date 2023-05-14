console.log(foo);

foo(111)
function foo(a){
    var a=222  //用let声明就不行
    console.log(a);
    console.log("foo");
}

var foo = 1;

// 会打印函数，而不是 undefined 。

// 这是因为在进入执行上下文时，首先会处理函数声明，其次会处理变量声明，如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性。



// ---------------------------------------------------------
// # 代码是怎么运行的
// 1. 在执行过程中，若使用未声明的变量，js执行会报错
// 2. 在一个变量定义之前使用它，不会报错，但是该变量的值为undefined，而不是定义的值
// 3. 在一个函数定义之前使用它，是不会报错的，且函数能正确执行


// # 变量提升
// javaScript 代码在执行过程中，javaScript引擎会把变量声明部分和函数声明部分提升到代码的最前面的“行为”


// # 预编译
// 预编译发生在函数执行的前一刻 (四部曲)（函数体）
// 1. 创建AO对象（Activation Object）（执行上下文对象）
// 2. 找形参和变量声明，将变量声明和形参作为AO的属性名，值为undefined
// 3. 将实参和形参值统一
// 4. 在函数体里找函数声明，将函数名作为AO对象的属性名，值赋予函数体

// 预编译也发生在全局（三部曲）
// 1. 创建GO对象
// 2. 找形参和变量声明，将变量声明和形参作为GO的属性名，值为undefined
// 3. 在全局里找函数声明，将函数名作为GO对象的属性名，值赋予函数体

// 总结：当 JavaScript 代码执行一段可执行代码时，会创建对应的执行上下文。对于每个执行上下文，都有三个重要属性：

// 变量对象（Variable object，VO）；
// 作用域链（Scope chain）；
// this。