let arr = [1, 3, 2, 4, 5, 123];
      //1.reduce版本
      // function qiusum(arr) {
      //   return arr.reduce((pre, cur) => {
      //     return pre + cur;
      //   });
      // }

      //2.循环方法
      // function qiusum(arr) {
      //   let sum = 0;
      //   for (let key of arr) {
      //     sum += key;
      //   }
      //   return sum;
      // }
      console.log(qiusum(arr));
