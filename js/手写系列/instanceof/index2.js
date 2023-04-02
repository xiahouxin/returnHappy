// function myInstanceOf(left, right) {
      //   let proto = Object.getPrototypeOf(left),
      //     prototype = right.prototype;

      //   while (true) {
      //     if (!proto) return false;
      //     if (proto === prototype) return true;
      //     proto = Object.getPrototypeOf(proto);
      //   }
      // }
      const myInstanceOf = (left, right) => {
        let proto = Object.getPrototypeOf(left);
        let prototype = right.prototype;
        while (true) {
          if (proto === prototype) {
            return true;
          }
          if (!proto) {
            return false;
          }
          proto = Object.getPrototypeOf(proto);
        }
      };
      console.log(myInstanceOf(10, Array));

      console.log(myInstanceOf([12, 3], Array));
      console.log(myInstanceOf(function () {}, Array));