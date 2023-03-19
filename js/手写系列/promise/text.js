// class Queue {
//     promise = Promise.resolve();
  
//     excute(promise) {
//       this.promise = this.promise.then(() => {
//         return promise.then(res=>{
//             console.log(res,'promise');
//             return res
//         })
//       });
//     //   console.log(this.promise);
//     this.promise.then(res=>{
//         console.log(res,'ressss');
//     })
//       return this.promise;
//     }
//   }
  
//   const queue = new Queue();
  
//   const delay = (params) => {
//     const time = Math.floor(Math.random() * 5);
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(params);
//       }, time * 500);
//     });
//   };
  
//   const handleClick = async (name) => {
//     const res = await queue.excute(delay(name));
//     console.log(res);
//   };
  
//   handleClick('A');
// //   handleClick('B');
// //   handleClick('C');
// //   handleClick('A');
// //   handleClick('C');
// //   handleClick('B');




class Queue{
    promise=Promise.resolve()
    excute(promisee){
        this.promise=this.promise.then((res)=>promisee)  // 这里的res是上一个this.promise的resolve的值.也就是then里面返回的值
        return this.promise
    }
}

const queue=new Queue()

function delay(name){
    let timer=Math.floor(Math.random()*5)
    return new Promise(reslove=>{
        setTimeout(() => {
            reslove(name)
        }, timer*500);
    })
}

let handleClick=async (name)=>{
    let res=await queue.excute(delay(name))
    // console.log(res);
}
  handleClick('A');
  handleClick('B');
  handleClick('C');
  handleClick('A');
  handleClick('C');
  handleClick('B');



// var a = 0
// var b = async () => {
//   a = a+ await 10
//   console.log('2', a) // -> ？
// }
// b()
// a++
// console.log('1', a) // -> ？