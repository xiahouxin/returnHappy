// 构造函数
function Student(name, age, sex) {
  // var this = {
        // name: '',
        // age: ''
  // }
  this.name = name
  this.age = age
  this.sex = sex
  this.grade = 2019
  // return this
  // return function() {}
}

var student = new Student('帅帅', 20, 'boy')
// console.log(student);

// 构造函数的内部原理：（当被new的时候）
// 1. 在构造函数体内最前面隐式加上 this = {}
// 2. 执行 this.xxx = xxx
// 3. 隐式的返回this




function myPerson(name, age) {
  var that = {}
  that.name = name
  that.age = age
  return 123
}

var per1 = myPerson('帅', 20)
var per2 = myPerson('家君', 18)

console.log(per1, per2);