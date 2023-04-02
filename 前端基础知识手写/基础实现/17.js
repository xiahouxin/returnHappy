// function getType(value) {
      //   if (value === null) {
      //     return "null";
      //   }
      //   if (typeof value === "object") {
      //     result = Object.prototype.toString
      //       .call(value)
      //       .split(" ")[1]
      //       .split("");
      //     result.pop();
      //     result = result.join("");
      //     return result + "";
      //   } else {
      //     return typeof value;
      //   }
      // }
      function getType(value) {
        let str = Object.prototype.toString.call(value);
        str = str.slice(8, str.length - 1);
        return str;
      }
      console.log(getType({}));
      console.log(getType(new Array()));
      console.log(getType(null));
      console.log(getType(function () {}));