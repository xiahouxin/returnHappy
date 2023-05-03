let a = 'aaa'
let b = 123
let c = true
let d = undefined
let e = null
let f = Symbol('f')
let g = BigInt(312312313134n)

let obj = {}
let arr = []
let fn = function() {}

// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d)); 

// console.log(typeof(e));  // object

// console.log(typeof(f));
// console.log(typeof(g));

// console.log(typeof(obj));
// console.log(typeof(arr)); // object
// console.log(typeof(fn));


// console.log(obj instanceof Object);
// console.log(arr instanceof Array);
// console.log(fn instanceof Function);



console.log(Object.prototype.toString.call(a));
console.log(Object.prototype.toString.call(arr));