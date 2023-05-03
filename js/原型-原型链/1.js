// Person.prototype  -- 原型
// Person.prototype = {}

Person.prototype.name = '启明'
Person.prototype.say = function() {
  console.log('hahahaha');
}

function Person() {
  this.name = '昭君'
}
// console.log(Person.name);

var person = new Person()
var person2 = new Person()
// console.log(person2.name);

// 他定义了构造函数制造出来的对象的公共祖先
console.log(person);
person.say()
