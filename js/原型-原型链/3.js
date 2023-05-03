Person.prototype.lastName = '曹'

function Person(name) {
  this.name = name
}

var person = new Person('善诚')

// console.log(person.lastName);

// person.lastName = 'chen'

// console.log(person.lastName); // 自己这个对象中新增 lastName，并不能修改原型上的属性
// console.log(Person.prototype.lastName);


// 改
// Person.prototype.lastName = 'chen'
// console.log(person.lastName);


// 删
delete person.lastName  // 不行
// console.log(person.lastName);





function Bus() {}

Car.prototype = {
  constructor: Bus
}
function Car() {

}

var car = new Car()

// console.log(car.constructor); // function Car() {}

// Car.prototype
// constructor指向 Car(), 为了让Car() 这个函数构造出来的所有的对象想要找到它的构造器的时候都能得到


console.log(car.constructor); // Bus