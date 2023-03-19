Person.prototype.say = function() {
  console.log('哈哈哈哈哈哈');
}
function Person(name) {
  // var this = {
  //   name: name,
  //   __proto__: Person.prototype
  // }
  this.name = name
  // return this
}
let p = myNew(Person)('小林')
p.say()



function myNew(fun) {
  return function() {
    let obj = {
      __proto__: fun.prototype
    }

    // 执行构造函数
    fun.call(obj, ...arguments)
    return obj
  }
}


// 首先函数接受不定量的参数，第一个参数为构造函数，接下来的参数被构造函数使用
// 然后内部创建一个空对象 obj
// 因为 obj 对象需要访问到构造函数原型链上的属性，所以我们通过 setPrototypeOf 将两者联系起来。这段代码等同于 obj.proto = Con.prototype
// 将 obj 绑定到构造函数上，并且传入剩余的参数
// 判断构造函数返回值是否为对象，如果为对象就使用构造函数返回的值，否则使用 obj，这样就实现了忽略构造函数返回的原始值

function Student (name, age){
  this.name = name;
  this.age = age;
}
function myNew(){
  const obj = new Object();
  Constructor = Array.prototype.shift.call(arguments); //shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
  obj.__proto__ = Constructor.prototype;
  let ret = Constructor.apply(obj,arguments); // 判断构造函数是否存在返回值
  return typeof ret === 'object'? ret : obj;
}

let newPerson = myNew(Student,'hanson',18);
console.log(newPerson.name) // hanson