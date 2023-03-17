//实现一个sleep函数立即输出111,间隔time后输出555
function sleep(time) {
    return new Promise((resolve, reject) => {
      console.log(111);
      setTimeout(() => {
        resolve();
      }, time);
    }).then(() => {
      console.log(555);
    });
  }
  sleep(2000);