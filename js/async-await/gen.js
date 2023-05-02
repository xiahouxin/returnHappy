// function* gen(){
//     yield 1
//     yield 2
//     yield 3
//     return 4
// }

// const g=gen()
// // console.log(g); //Object [Generator] {}
// console.log(g.next());  //{ value: 1, done: false }
// console.log(g.next());  //{ value: 2, done: false }
// console.log(g.next());  //{ value: 3, done: false }
// console.log(g.next());  //{ value: 4, done: true }

// function fn(num){
//     console.log(num);
//     return num
// }

// function* gen(){
//     yield fn(1)
//     yield fn(2)
//     return 3
// }
// const g=gen() //{}
// console.log(g.next());  //{ value: 1, done: false }
// console.log(g.next());  //{ value: 2, done: false }
// console.log(g.next());  //{ value: 3, done: true }


function fn(num) {
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(num * 3)
        }, 1000);
    })
}
function* gen() {
   let num1= yield fn(1)
   console.log(num1);
   let num2= yield fn(2)
   console.log(num2);
    return num2
}
const g = gen() //{}
// const next1=g.next()
// next1.value.then(res1=>{
//     console.log(next1);
//     console.log(res1);

//     const next2=g.next()
//     next2.value.then(res2=>{
//         console.log(next2);
//         console.log(res2);
//         console.log(g.next());
//     })
// })


console.log(g.next(1));  //{ value: Promise { <pending> }, done: false }
console.log(g.next(5));  //{ value: Promise { <pending> }, done: false }
console.log(g.next(7));  //{ value: 3, done: true }