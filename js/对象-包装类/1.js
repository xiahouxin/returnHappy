var HuaZiGe = {
  name: 'huazi',
  age: 20,
  sex: 'boy',
  somke: function() {
    console.log('I am somking! cool!');
    this.health--
  },
  drink: function() {
    console.log('I am drink');
    this.health++
  },
  health: 100
}

// HuaZiGe.health++ // 可读可写
// console.log(HuaZiGe.health);

// HuaZiGe.somke()
// HuaZiGe.drink()
// HuaZiGe.drink()
// console.log(HuaZiGe.health);


// 增
HuaZiGe.boyFriend = 'lai'

// 查
// console.log(HuaZiGe.boyFriend);

// 改
// HuaZiGe.sex = 'girl'
// console.log(HuaZiGe.sex);

// 删
delete HuaZiGe.sex
delete HuaZiGe.name
// console.log(HuaZiGe.name); // undefined ?

// 当访问一个不存在的变量时会报错，当访问一个对象中不存在的属性就为 undefined！为什么？



// 对象的创建
// 1. var obj = {}   // plainObject 对象字面量|对象直接量
// 2. 构造函数
      // 1）系统自带的构造函数    Object()
      // 2）自定义

// var obj = new Object()   // var obj = {}  没有区别
// obj.name = '家君'
// obj.sex = 'boy'
// console.log(obj);


// 2)
function Car(color) {
  this.name = 'BMW'
  this.height = '1400'
  this.lang = '4900'
  this.weight = 1000

  this.health = 100
  this.run = function() {
    this.health--
  }
  this.color = color
}

var car1 = new Car('pink')
var car2 = new Car('red')

// console.log(car1 == car2); // 构造函数实例化出来的对象是相互独立的

// console.log(car1,car2)


car1.name = '红旗'
car2.name = '劳斯莱斯'

car2.run()
console.log(car1);
console.log(car2);





