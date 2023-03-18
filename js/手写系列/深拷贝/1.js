// let a = 1
// let b = a
// a = 2
// console.log(b);



// let c = { name: '冯总', age: 18 }
// let d = c
// c.age = 19
// console.log(d);


let a={
    age:1,
    like:{
        name:'running'
    }
}
// 方法一
let b=Object.assign({},a)
// 方法二
let c={...a}

a.like.name='reading'
a.age=100
console.log(b);  //{ age: 1, like: { name: 'reading' } }
console.log(c);  //{ age: 1, like: { name: 'reading' } }