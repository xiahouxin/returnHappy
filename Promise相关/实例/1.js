function red() {
  console.log("red",new Date().getSeconds());
}
function green() {
  console.log("green",new Date().getSeconds());
}
function yellow() {
  console.log("yellow",new Date().getSeconds());
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









// var checkPowersOfThree = function (n) {
// 	while (n !== 0) {
// 		if (n % 4 === 2 || n % 4 === 3) {
// 			return false
// 		}
// 		n = Math.floor(n / 4)
// 		console.log(n);
// 	}
// 	return true
// }

// console.log(checkPowersOfThree(16))
