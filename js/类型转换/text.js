 //=>原始值转原始值
      console.log(Number(undefined)); //=>NaN
      console.log(Number(null)); //=>0
      console.log("分割线-------------");
      //=>虚值 undefined、null、""、NaN、0、false
      console.log(Boolean(undefined));
      console.log(Boolean(null));
      console.log(Boolean(""));
      console.log(Boolean(NaN));
      console.log(Boolean(0));
      console.log(Boolean(false));
      console.log("分割线-------------");
      //=>对象转原始值
      console.log(Boolean({}));
      console.log(Boolean([]));
      console.log(Boolean(new Error()));
      console.log(Boolean(Symbol()));
      console.log("分割线-------------");
      //=>对象转Number

      //1.先找valueOf方法
      //2.valueOf返回值是原始值，通过Number包装后返回，不是数据类型，就看toString
      //3.看toString是否是原始值
      const obj = {
        toString() {
          return "10";
        },
        valueOf() {
          return 1;
        },
      };
      console.log(Number(obj));
      console.log("分割线-------------");
      console.log(Number([1, 2, 3]));
      console.log(Number([]));
      console.log(Number({}));