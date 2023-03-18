Person.prototype.weight = 140
function Person(sex) {
  this.sex = sex
}
let person = new Person('boy')
person.name = '冯总'
person.age = 18
person.like = {
  sport: 'running',
  food: 'beef'
}
person.array = [1, 2, 3]
// { 
//   sex: 'boy'
//   name: '冯总', 
//   age: 18, 
//   like: {
//     sport: 'running',
//     food: 'beef'
//   } 
// }

// function deepCopy(obj) {
//   // let obj2 = obj instanceof Array ? [] : {}
//   // for (let i in obj) {
//   //   if (obj[i] instanceof Object) {
//   //     obj2[i] = deepCopy(obj[i])
//   //   } else {
//   //     if (obj.hasOwnProperty(i)) {
//   //       obj2[i] = obj[i]
//   //     }

//   //   }
//   // }
//   // return obj2;
//   let copy = obj instanceof Array ? [] : {}
//   for (let i in obj) {
//     if (obj.hasOwnProperty(i)) {
//       copy[i] = obj[i] instanceof Object ? deepCopy(obj[i]) : obj[i]
//     }
//   }
//   return copy
// }
function deepCopy(obj) {
  let map = new WeakMap()
  function Copy(obj) {
    if (obj instanceof Object) {
      // ----------
      if (map.has(obj)) {
        console.log('----------');
        return map.get(obj)
      }
      // -----------
      let newObj
      if (obj instanceof Array) {
        newObj = []
      } else if (obj instanceof Function) {
        newObj = function () {
          obj.apply(this, arguments)
        }
      } else if (obj instanceof RegExp) {
        newObj = new RegExp(obj.source, obj.flags)
      } else if (obj instanceof Date) {
        newObj = new Date(obj)
      }else if(obj instanceof Map){
        newObj=new Map()
      }else if(obj instanceof Set){
        newObj=new Set()
      }else {
        newObj = {}
      }
      // -------------
      let desc = Object.getOwnPropertyDescriptor(obj)  //获取obj自有属性的描述
      let clone = Object.create(Object.getPrototypeOf(obj), desc)  //依据obj的原型创建对象，但又只放进去obj的自有属性
      map.set(obj, clone)
      // ------------
      for (let key in obj) {
        newObj[key] = Copy(obj[key])
      }
      
      return newObj
    }

    return obj
  }

  return Copy(obj)
}


let newPerson = deepCopy(person)
let newPerson2 = deepCopy(person)
newPerson2.sex='giry'
person.like.sport = 'swimming'
person.array[1] = 100
// console.log(person.array instanceof Object);
console.log(newPerson); // { name: '冯总', age: 18 }
console.log(newPerson2); // { name: '冯总', age: 18 }

// var a=[1,2,3,4]
// var b=a
// a[1]=100
// console.log(b);
