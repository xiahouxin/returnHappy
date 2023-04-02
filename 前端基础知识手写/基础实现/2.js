//=>基本数据类型
console.log(Object.prototype.toString.call(123));
console.log(Object.prototype.toString.call(true));
console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call(undefined));
console.log(Object.prototype.toString.call("123"));
console.log(Object.prototype.toString.call(BigInt(123)));
console.log(Object.prototype.toString.call(Symbol()));
console.log("分割线-------------");
//=>复杂数据类型
console.log(Object.prototype.toString.call([]));
console.log(Object.prototype.toString.call({}));
console.log(Object.prototype.toString.call(Date));
console.log(Object.prototype.toString.call(new Date()));
console.log(Object.prototype.toString.call(/\d/));
console.log("分割线-------------");
//=>特例
-(function () {
  console.log(Object.prototype.toString.call(arguments));
})(1, 2, 3);
console.log(Object.prototype.toString.call(document));