function Person(name) {
    this.name = name;
  }
  Person.prototype.getName = function () {
    console.log(this.name);
  };

  function Car(model) {
    this.model = model;
  }
  Car.prototype.getModel = function () {
    console.log(this.model);
  };

  function create(type, param) {
    // return new this[type](param);
    console.log(this,'111');
    if (this instanceof create) {
      return new this[type](param);
    } else {
      return new create();
    }
  }
  create.prototype = {};

  var person1 = new create("person", "zhangsan");
  var car1 = new create("car", "lanbojini");
  // person1.getName();
  // car1.getModel();

  //=>执行过程
  /* 
    new create=>{
      __proto__:{
        person: Person,
        car: Car,
      }
    }
    this[type]=>this.type=>this.person=>Person
    this.type(param)=>Person('zhangsan')
   */