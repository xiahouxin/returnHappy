// let a = 'yes'
// let b = 'yes'

// let c = Symbol('yes')

// // console.log(a == c);
// // console.log(typeof c);

// // let s = new Symbol('yes')
// // console.log(s);

// // console.log(c instanceof Symbol); // false

// const obj = {
//   aaa() {
//     return 'abc'
//   }
// }
// // 如果Symbol接受的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后再生成一个Symbol值
// // const sym = Symbol(obj) 
// // "{aaa() {return 'abc'}}"
// // console.log(sym);



// let s11 = Symbol('foo')
// let s22 = Symbol('foo')

// console.log(s11 === s22,'11111');


// let sym = Symbol('My Symbol')

// // console.log(sym);
// // console.log(String(sym)); // 'Symbol(My Symbol)'
// // console.log(sym.toString());

// // console.log('your symbol is' + sym);

// let mySymbol = Symbol()
// console.log(mySymbol);
// // let obj = {
// //   name: '冯总',
// //   name: '宝老板'
// // }
// // obj[mySymbol] = 'Hello' // obj.mySymbol = 'Hello'
// obj[mySymbol] = 'world'

// console.log(obj);

// let a = {
//   [mySymbol]: 'Hello'
// }


// let a = {}
// Object.defineProperty(a, mySymbol, {value: 'Hello'})



// let obj = {
//   name: '冯总'
// }
// let a = Symbol('a')
// let b = Symbol('b')

// obj[a] = 'Hello'
// obj[b] = 'World'

// console.log(obj.hasOwnProperty('name'),'234'); // true
// console.log(obj.hasOwnProperty(a));

// console.log(Object.getOwnPropertySymbols(obj));  //获取obj对象身上Symbols类型的属性
// console.log(Object.getOwnPropertyNames(obj));  //获取obj对象身上除Symbols类型的属性

// {
//   a: 'Hello'
//   b: 'World'
// }



// let s1 = Symbol.for('foo')
// let s2 = Symbol('foo')

// console.log(s1 === s2);
// console.log(Symbol.keyFor(s2));


let sss = Symbol(undefined)
console.log(sss);


let ss = {
  [Symbol('123')]: 123
}
ss[Symbol('123')] = 234

console.log(ss);