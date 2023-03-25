function onceLog(callback) {
    let flag = 0;
    return function () {
      if (!flag) {
        flag = 1;
        return callback();
      } else {
        return;
      }
    };
  }
  function onLogFunc() {
    console.log(123);
  }
  let a = onceLog(onLogFunc);
  setInterval(() => {
    console.log("666");
    a();
  }, 1000);