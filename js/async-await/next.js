function* gen(){
    const num1=yield 1
    console.log(num1,'num1');  //11111
    const num2=yield 2
    console.log(num2,'num2');  //22222
    return 3
}
const g=gen()  //{}
console.log(g.next());  //{ value: 1, done: false }
console.log(g.next(11111));  //{ value: 2, done: false }  //g.next(11111)开启了第二次的yield,并且其中的参数传给了上一个yield的变量的
console.log(g.next(22222));  //{ value: 3, done: true }