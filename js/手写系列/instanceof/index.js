let a = { name: '冯总' }
let b = [1, 2, 3]  // new Array()

// console.log(b instanceof Object);

console.log(instance_of(b, Object));

// Array.prototype.__proto__  === Object.prototype



function instance_of(left, right) {
  let leftVal = left.__proto__
  let rightVal = right.prototype

  while(true) {
    if (leftVal === null) return false 
    if (leftVal === rightVal) return true
    leftVal = leftVal.__proto__
  }
  
}

// function mockInstanceOf(A, B) {
//   let backup = A;
//   while (!!backup) {
//     const curPrototype = Object.getPrototypeOf(backup);
//     backup = curPrototype;

//     if (curPrototype === B.prototype) {
//       return true;
//     }
//   }
//   return false;
// }


function instanceOF(A,B){
  let back=A
  while(!!back){
    let constrou=Object.getPrototypeOf(back)
    back=constrou
    if(back===B.prototype){
      return true
    }
  }
  return false
}


// 你可能不知道 Symbol.hasInstance 是什么东西，其实就是一个能让我们自定义 instanceof 行为的东西
class PrimitiveString {
  static [Symbol.hasInstance](x) {
    console.log(x,'--------');
    return typeof x === 'string'
  }
}
console.log('hello world' instanceof PrimitiveString) // true