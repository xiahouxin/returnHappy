function fn(nums){
    return new Promise(reslove=>{
        setTimeout(() => {
            reslove(nums*2)
        }, 1000);
    })

}

function* gen(){
    const num1=yield fn(1)  //1
    console.log(num1,'num1111');
    const num2=yield fn(num1) //
    const num3=yield fn(num2)  //
    return num3
}
const g=gen()
const next1=g.next()
console.log(next1);  //{ value: Promise { <pending> }, done: false }
next1.value.then(res1=>{
    console.log(next1)    //{ value: Promise { 2 }, done: false }
    console.log(res1);  //2

    const next2=g.next(res1+3)   //res1+3给了num1
    next2.value.then(res2=>{
        console.log(next2);
        console.log(res2);  //10

        const next3=g.next(res2)
        next3.value.then(res3=>{
            console.log(next3);
            console.log(res3);

            console.log(g.next(res3));
        })
    })
})