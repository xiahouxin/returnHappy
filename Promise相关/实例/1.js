// 手写红绿灯
function red(count) {
  console.log(`${count}-red--${new Date().getSeconds()}`);
}
function green(count) {
  console.log(`${count}-green--${new Date().getSeconds()}`);
}
function yellow(count) {
  console.log(`${count}-yellow--${new Date().getSeconds()}`);
}
function light(cb, timer,count) {
  return new Promise((resolve) => {
    setTimeout(() => {
      cb(count);
      resolve(count);
    }, timer);
  });
}
function loop() {
  let count = 0;
  return function foo() {
    count++
    Promise.resolve(count)
      .then((res) => {
        return light(red, 3000,res);
      })
      .then((res) => {
        return light(green, 2000,res);
      })
      .then((res) => {
        return light(yellow, 1000,res);
      })
      .then((res) => {
        return foo();
      });
  };
}
loop()();


