//实现一个固定参数的add函数
    // function add(x) {
    //   let sum = x;
    //   let temp = function (y) {
    //     sum += y;
    //     return temp;
    //   };
    //   temp.toString = function () {
    //     return sum;
    //   };
    //   return temp;
    // }
    // let a = add(1)(2)(3);
    // let b = add(1)(4);
    // console.log(a.toString());
    // console.log(b.toString());
    function add(x) {
        let sum = x;
        let temp = function (y) {
          sum += y;
          return temp;
        };
        temp.toString = function () {
          return sum;
        };
        return temp;
      }
      let a = add(1)(2)(4);
      console.log(a.toString());