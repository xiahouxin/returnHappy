function fn(nums) {
    return new Promise(reslove => {
        setTimeout(() => {
            reslove(nums * 2)
        }, 1000);
    })
}

function* gen() {
    const num1 = yield fn(1)  //1
    console.log(num1);  //4
    const num2 = yield fn(5) //
    console.log(num2);  //12
    const num3 = yield fn(10)  //
    console.log(num3);  //22
    return num3
}

// 用genrator函数来实现async-await函数
function generatorToAsync(generatoFn) {
    return function () {
        const gen = generatoFn.apply(this, arguments)  //gen有可能有参数

        return new Promise((resolve, reject) => {
            // 法1
            function go(key, arg) {
                let res;
                try {
                    res = gen[key](arg)   //gen.next(arg)开启了第n次的yield,并且其中的参数传给了上一个yield的变量
                } catch (error) {
                    reject(error)  //有可能执行返回的reject状态的promise
                }
                const { value, done } = res
                if (done) {
                    resolve(value)
                } else {
                    Promise.resolve(value).then(
                        val => go('next', val+2),  
                        err => go('throw', err)
                    )
                }

            }
            go('next')

            // 法2
            // const g=generatoFn()
            // const next1=g.next()
            // next1.value.then(res1=>{  //2

            //     const next2=g.next(res1)
            //     next2.value.then(res2=>{  //4

            //         const next3=g.next(res2)
            //         next3.value.then(res3=>{  //8

            //             reslove(g.next(res3).value)  //8
            //         })
            //     })
            // })

        })
    }
}

// 手写
// function generatorToAsync(generatoFn){
//     return function(){
//         let gen=generatoFn.apply(this,arguments)
//         return new Promise((resolve,reject)=>{
//             function go(key,arg){
//                 let res
//                 try {
//                     res=gen[key](arg)
//                 } catch (error) {
//                     reject(error)
//                 }
//                 let {value,done}=res
//                 if(done){
//                     resolve(value)
//                 }else{
//                     Promise.resolve(value).then(
//                         val=>go('next',val),
//                         err=>go('throw',err)
//                     )
//                 }
//             }
//             go('next')
//         })
//     }
// }



const asyncFn = generatorToAsync(gen)
// console.log(asyncFn());   //promise
asyncFn().then(res => console.log(res, '----'))





// async function asyncFn(){
//     const num1=await fn(1)
//     console.log(num1);
//     const num2=await fn(num1)
//     const num3=await fn(num2)
//     return num3
// }
// asyncFn().then(res=> console.log(res))