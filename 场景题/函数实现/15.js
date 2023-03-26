// 1098+2098
      // function sum(a, b) {
      //   a = a + "";
      //   b = b + "";
      //   let i = a.length - 1;
      //   let j = b.length - 1;
      //   let curry = 0;
      //   let arr = [];
      //   while (i >= 0 || j >= 0 || curry !== 0) {
      //     let left = i >= 0 ? Number(a[i]) : 0;
      //     let right = j >= 0 ? Number(b[j]) : 0;
      //     let result = left + right + curry;
      //     arr.push(result % 10);
      //     curry = Math.floor(result / 10);
      //     i--;
      //     j--;
      //   }
      //   return arr.reverse().join("");
      // }

      function bigSum(a, b) {
        a = a + "";
        b = b + "";
        let i = a.length - 1;
        let j = b.length - 1;
        let curry = 0;
        let arr = [];
        while (i >= 0 || j >= 0 || curry !== 0) {
          let left = i >= 0 ? Number(a[i]) : 0;
          let right = j >= 0 ? Number(b[j]) : 0;
          let result = left + right + curry;
          arr.push(result % 10);
          curry = Math.floor(result / 10);
          i--;
          j--;
        }
        return arr.reverse().join("");
      }
      console.log(bigSum(31123121098, 2097));