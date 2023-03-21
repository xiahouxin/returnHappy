// // 1.Symbol.toPrimitive
// const a = {
//     i: 1,
//     [Symbol.toPrimitive]() {
//       return this.i++
//     }
//   }
//   // 每次进行a == xxx时都会先经过Symbol.toPrimitive函数，自然也就可以实现a依次递增的效果
//   if (a == 1 && a == 2 && a == 3) {
//     console.log('前端胖头鱼') // 前端胖头鱼
//   }
  

// // 2.valueOf vs toString
//   let a = {
//     i: 1,
//     // valueOf替换成toString效果是一样的
//     // toString
//     valueOf() {
//       return this.i++
//     }
//   }
  
//   if (a == 1 && a == 2 && a == 3) {
//     console.log('前端胖头鱼') // 前端胖头鱼
//   }


// // 3.Object.defineProperty
//   let _a = 1
//   Object.defineProperty(window, 'a', {
//     get() {
//       return _a++
//     }
//   })
  
//   if (a == 1 && a == 2 && a == 3) {
//     console.log('前端胖头鱼') // 前端胖头鱼
//   }
  
  

// 4.Proxy
let a = new Proxy({ i: 1 }, {
    get(target) {
      return () => target.i++
    }
  })
  
  if (a == 1 && a == 2 && a == 3) {
    console.log('前端胖头鱼') // 前端胖头鱼
  }
  