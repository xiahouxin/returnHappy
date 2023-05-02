const arr = [1, 2, 2, 'abc', 'abc', true, true, false, false, undefined, undefined, NaN, NaN]

// 1.利用Set()+Array.from()
// Set对象：是值的集合，你可以按照插入的顺序迭代它的元素。 Set中的元素只会出现一次，即Set中的元素是唯一的。
// Array.from() 方法：对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。

const result = Array.from(new Set(arr))
console.log(result) // [ 1, 2, 'abc', true, false, undefined, NaN ]

// 注意：以上去方式对NaN和undefined类型去重也是有效的，是因为NaN和undefined都可以被存储在Set中， NaN之间被视为相同的值（尽管在js中：NaN !== NaN）。