function ObjectCreate(obj) {
    function Fn() {}
    Fn.prototype = obj;
    return new Fn();
  }
  let b = Object.create([1, 2, 3]);
  console.log(b);
  console.log(ObjectCreate(function fn() {}));