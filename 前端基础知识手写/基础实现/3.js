// function deepClone(obj) {
      //   let result;
      //   if (typeof obj == "object") {
      //     if (obj == null) {
      //       result = obj;
      //     } else if (obj.constructor == RegExp) {
      //       result = new RegExp(obj);
      //     } else if (Array.isArray(obj)) {
      //       result = [];
      //       for (let key of obj) {
      //         result.push(deepClone(key));
      //       }
      //     } else {
      //       result = {};
      //       for (let key in obj) {
      //         if (!result.hasOwnProperty(key)) {
      //           result[key] = deepClone(obj[key]);
      //         }
      //       }
      //     }
      //   } else {
      //     if (typeof obj == "function") {
      //       result = function () {
      //         return obj.call(...arguments);
      //       };
      //     } else {
      //       result = obj;
      //     }
      //   }
      //   return result;
      // }
      function deepClone(obj) {
        let result = null;
        if (typeof obj == "object") {
          if (obj === null) {
            result = null;
          } else if (obj.constructor === RegExp) {
            result = new RegExp(obj);
          } else if (Array.isArray(obj)) {
            result = [];
            for (let key of obj) {
              result.push(deepClone(key));
            }
          } else {
            result = {};
            for (const key in obj) {
              if (!result.hasOwnProperty(key)) {
                result[key] = deepClone(obj[key]);
              }
            }
          }
        } else {
          result = obj;
        }
        return result;
      }
      // function deepClone(obj) {
      //   let result = null;
      //   if (typeof obj === "object") {
      //     if (obj == null) {
      //       result = null;
      //     } else if (obj.constructor == RegExp) {
      //       result = new RegExp(obj);
      //     } else if (Array.isArray(obj)) {
      //       result = [];
      //       for (let key of obj) {
      //         result.push(deepClone(key));
      //       }
      //     } else {
      //       result = {};
      //       for (const key in obj) {
      //         if (!result.hasOwnProperty(key)) {
      //           result[key] = deepClone(obj[key]);
      //         }
      //       }
      //     }
      //   } else {
      //     result = obj;
      //   }
      //   return result;
      // }
      let m = {
        a: 1,
        b: ["name", "xxx"],
        c: /^g/,
        d: { e: 1 },
        f: function (a, b) {
          console.log(666);
        },
      };
      let n = deepClone(m);
      console.log(deepClone(n));