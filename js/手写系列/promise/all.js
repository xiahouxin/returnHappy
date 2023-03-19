Promise.all([a, b, c]).then(() => { })

function all(promises) {
  const result = []
  let count = 0
  return new Promise((resolve, reject) => {
    const addData = (index, value) => {
      result[index] = value
      count++
      if (count === promises.length) resolve(result)
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        res => {
          addData(index, res)
        },
        err => {
          reject(err)
        }
      )
    })
  })
}


// function all(promisees){
//   let result=[]
//   return new Promise((resolve,reject)=>{
//     const addData=(index,value)=>{
//       result[index]=value
//       if(index==promisees.length-1) resolve(result)
//     }
//     promisees.forEach((index,item) => {
//       if(item instanceof Promise){
//         item.then(
//           res=>{
//             addData(index,res)
//           },
//           err=>{
//             reject(err)
//           }
//         )
//       }else{
//         addData(index,item)
//       }
//     });
//   })
// }