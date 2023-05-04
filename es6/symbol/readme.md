# Symbol 特点
1. Symbol是es6引入的一个新的原始类型，表示独一无二的值
2. Symbol可以被typeof判断， 不能为 instanceof 判断，
3. 如果Symbol接受的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后再生成一个Symbol值
4. Symbol值不能与其他类型的值进行运算
5. 当Symbol类型作为对象的属性时，必须要用Object.getOwnPropertySymbols() 遍历得到
6. Symbol.keyFor() 返回一个已登记的Symbol类型的key