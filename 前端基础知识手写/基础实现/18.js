//发布订阅的类
      // class EventEmitter {
      //   constructor() {
      //     //定义一个容器
      //     this.arrayList = {};
      //   }
      //   //=>订阅消息
      //   on(name, fn) {
      //     if (this.arrayList[name] && !this.arrayList[name].includes(fn)) {
      //       this.arrayList[name].push(fn);
      //     } else {
      //       this.arrayList[name] = [fn];
      //     }
      //   }
      //   //=>移除消息
      //   off(name, fn) {
      //     if (this.arrayList[name]) {
      //       let index = this.arrayList[name].indexOf(fn);
      //       this.arrayList[name].splice(index, 1);
      //       console.log(this.arrayList);
      //     }
      //   }
      //   //=>发布消息
      //   emit(name, once = false, ...args) {
      //     if (this.arrayList[name]) {
      //       let task = [...this.arrayList[name]];
      //       for (let key of task) {
      //         key.call(this, ...args);
      //       }
      //       if (once) {
      //         delete this.arrayList[name];
      //       }
      //     }
      //   }
      // }

      class EventEmitter {
        constructor() {
          this.cache = {};
        }
        on(fn, name) {
          let canPushFn = this.cache[name] && !this.cache[name].includes(fn);
          if (canPushFn) {
            this.cache[name].push(fn);
          } else {
            this.cache[name] = [fn];
          }
        }
        off(name, fn) {
          if (this.cache[name]) {
            let index = this.cache[name].indexOf(name);
            this.cache.splice(index, 1);
          }
        }
        emit(fn, name, ...args) {
          if (this.cache[name]) {
            let task = [...this.cache[name]];
            for (let key of task) {
              key.call(this, ...args);
            }
            if (once) {
              delete this.cache[name];
            }
          }
        }
      }

      let s1 = new EventEmitter();
      let f1 = function (name, age) {
        console.log(name, age);
      };
      let f2 = function (name, age) {
        console.log("hello", name, age);
      };
      s1.on("aaa", f1);
      s1.on("aaa", f1);
      s1.on("aaa", f2);
      s1.on("bbb", f2);
      s1.off("bbb", f2);
      s1.emit("aaa", true, "张三", 19);