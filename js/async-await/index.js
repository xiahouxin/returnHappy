function request(num){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(num*2)
            // console.log(new Date());
            // console.log(num*2 ,'111');
        }, 2000);
    })
}

// request(1).then(res1=>{
//     console.log(res1);

//     request(res1).then(res2=>{
//         console.log(res2);
//         // ...
//     })
// })


// function fn(){  //不行
//     const res1= request(5)
//     const res2= request(res1).then(res=>{
//         console.log();
//     })
//     console.log(res2);
// }


// async function fn(){
//     console.log(await request(1),'222');
//     await request(2)  //假如request没有resolve，这这个request是出不来值的
// }
// fn()

async function fn(){
    const res1=await request(5)
    console.log(res1,'res1');
    const res2=await request(res1)
    console.log(res2,'res2');
    return res2+2
}
// function fn(){  //没有await的话，会在一秒内执行完
//     const res1=request(5)
//     const res2=request(res1)
//     return res2+2
// }
// fn()

// async function fn(){      //async函数返回的是promise对象，如果async内部有返回值，则返回值就是promise对象里的reslove里面的值，可以被then接收到,
                             //await 后面如果接的是promise对象，这这个promise对象里的reslove函数值就是await接收到的值，如果这个promise对象没有reslove，则无法接收到值，且影响后面代码执行
//     const res1=await 5    //await 后面如果接收的是基本类型，则res1就是这个基本类型，即5
//     const res2=await res1+3
//     console.log(res2);
//     return res2+2
// }
// fn()

// async function fn(num){   //async函数返回的是promise对象，如果async内部有返回值，则返回值就是promise对象里的reslove里面的值，可以被then接收到,
                             //await 后面如果接的是promise对象，这这个promise对象里的reslove函数值就是await接收到的值
//     return num
// }
console.log(fn);
// console.log(fn(10));
fn().then(res=> console.log(res))