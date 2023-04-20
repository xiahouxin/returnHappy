console.log(1);
      setTimeout(() => {
        console.log(2);
      }, 1000);
      async function fn() {
        console.log(3);
        setTimeout(() => {
          console.log(4);
        }, 20);
        return Promise.reject();
      }
      async function run() {
        console.log(5);
        await fn();
        console.log(6);
      }
      run();
      //for循环执行约150ms
      for (let i = 0; i < 90000000; i++) {}
      setTimeout(() => {
        console.log(7);
        new Promise((resolve) => {
          console.log(8);
          resolve();
        }).then(() => {
          console.log(9);
        });
      }, 0);
      console.log(10);
