var length = 10;
function fn() {
  return this.length + 1;
}
var obj = {
  length: 5,
  test1: function () {
    return fn();
  },
};
obj.test2 = fn;
console.log(obj.test1()); // 11
console.log(fn()); // 11
console.log(obj.test2()); // 6
