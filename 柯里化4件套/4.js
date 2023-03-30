// function add() {
      //   var _args = Array.prototype.slice.call(arguments);
      //   var _adder = function () {
      //     _args.push(...arguments);
      //     return _adder;
      //   };
      //   _adder.toString = function () {
      //     return _args.reduce((pre, cru) => {
      //       return pre + cru;
      //     }, 0);
      //   };
      //   return _adder;
      // }

      function add() {
        let arg = [...arguments];
        let add = function () {
          arg.push(...arguments);
          return add;
        };
        add.valueOf = function () {
          return arg.reduce((pre, cru) => {
            return pre + cru;
          });
        };
        return add;
      }
      console.log(add(1)(3)(12).valueOf());