function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}
function light(cb, timer) {
  return new Promise((resolve) => {
    setTimeout(() => {
      cb();
      resolve();
    }, timer);
  });
}
function loop() {
  Promise.resolve()
    .then((res) => {
      return light(red, 3000);
    })
    .then((res) => {
      return light(green, 2000);
    })
    .then((res) => {
      return light(yellow, 1000);
    })
    .then((res) => {
      return loop();
    });
}
loop();
