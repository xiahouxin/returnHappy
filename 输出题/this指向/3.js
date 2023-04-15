//1.
/*
            function foo() {
              console.log(this.a);
            }
            function doFoo() {
              foo();
            }
            var obj = {
              a: 1,
              doFoo: doFoo,
            };
            var a = 2;
            obj.doFoo();
            */

//2.注意箭头函数
/*
      var a = 10;
      var obj = {
        a: 20,
        say: () => {
          console.log(this.a);
        },
      };
      obj.say();

      var anotherObj = { a: 30 };
      obj.say.apply(anotherObj); 
      */

//3.非箭头函数的情况
/* 
      var a = 10;
      var obj = {
        a: 20,
        say() {
          console.log(this.a);
        },
      };
      obj.say();
      var anotherObj = { a: 30 };
      obj.say.apply(anotherObj); 
      */

//4.
/* 
      function a() {
        console.log(this);
      }
      a.call(null); 
      */

//5.
/* 
      var obj = {
        name: "cuggz",
        fun: function () {
          console.log(this.name);
        },
      };
      obj.fun(); // cuggz
      new obj.fun(); // undefined 
      */
