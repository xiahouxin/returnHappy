// function sub_curry(fn) {
//   return function() {
//     return fn()
//   }
// }

// function curry(fn, length) {
//   length = length || 4
//   return function() {
//     if (length > 1) {
//       return curry(sub_curry(fn), --length)
//     } else {
//       return fn()
//     }
//   }
// }

// var fn0 = function() {
//   console.log(1);
// }
// var fn1 = curry(fn0)

// fn1()

// // curry(sub_curry(fn0))

// // curry(function() {
// //   return fn0()
// // })

// fn1()()

// // curry(function() {
// //   return fn0()
// // })

// fn1()()()()
// // (function() {
// //   return fn0()
// // })()
// fn0()

// function sub_curry(fn){
//   let args=[].slice.call(arguments,1)
//   return function(){
//     let newArgs=args.concat([].slice.call(arguments))
//     return fn.apply(this,newArgs)
//   }
// }

// function curry(fn,length){
//   length=length || fn.length
//   let slice=Array.prototype.slice
//   return function(){
//     if(arguments.length<length){
//       let cback=[fn].concat(slice.call(arguments))
//       return curry(sub_curry.apply(this,cback),length-arguments.length)
//     }else{
//       return fn.apply(this,arguments)
//     }
//   }

// }
// let add=curry(function(a,b,c,d,e){
//   return [a,b,c,d,e]
// })
// console.log(add('a')('b')('c')('d')('e'));




function sub_curry(fn){
    let args=Array.prototype.slice.call(arguments,1)
    return function(){
      let newArgs=args.concat([...arguments])
      return fn.apply(this,newArgs)
    }
  }
  
  function curry(fn,length){
    length=length || fn.length
    let slice=Array.prototype.slice
    return function(){
      if(arguments.length<length){
        let cback=[fn].concat(slice.call(arguments))
        return curry(sub_curry.apply(this,cback),length-arguments.length)
      }else{
        return fn.apply(this,arguments)
      }
    }
  }
  
   // 通用版
   function curry(fn, args) {
    var length = fn.length;
    var args = args || [];
    return function() {
        newArgs = args.concat(Array.prototype.slice.call(arguments))
        console.log(newArgs)
        if(newArgs.length < length) {
            return curry.call(this, fn, newArgs);
        } else {
            return fn.apply(this, newArgs);
        }
    }
  }
  function multiFn(a, b, c) {
    console.log(a * b * c)
    return a * b * c;
  }
  
  var multi = curry(multiFn);
  multi(2)(3)(4);
  // multi(2, 3, 4)
  // multi(2)(3, 4)
  // multi(2, 3)(4)