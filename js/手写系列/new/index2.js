function Person(name) {
    this.name = name;
    // return { a: 1, b: 2 };
  }
  
  const obj = new Person('xx');
  // 请问 obj 是什么
  // 以及, 请问 obj 返回的对象是否指向 Person.prototype

  console.log(obj);