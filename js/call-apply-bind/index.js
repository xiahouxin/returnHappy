// let user='xhx'
// var a = {
//   user: '家君',
//   fn: function(e=0, ee=0) {
//     console.log(this.user);
//     console.log(e + ee);
//   }
// }
// // a.fn()
// var b = a.fn
// b()
// // b.call(a, 1, 2)




// var a = {
//   user: '家君',
//   fn: function(e, ee) {
//     console.log(this.user);
//     console.log(e + ee);
//   }
// }

// var b = a.fn
// b.apply(a, [12, 1])



// var a = {
//   user: '家君',
//   fn: function(e, ee) {
//     console.log(this.user);
//     console.log(e + ee);
//   }
// }

// var b = a.fn
// var c = b.bind(a, 2)
// c(4, 5)

var name = "windowsName";
// this.name='xhx'
var a = {
    name : "Cherry",
    func1: function () {
        console.log(this.name)     
    },
    func2: function () {
        this.name='xhx'
        setTimeout(() => {
            console.log(this.name,'箭头函数');
        },100);
    }

};

// a.func2()     // Cherry
this.name='zmr'
let bar=a.func2
bar()

// console.log(this.name,'quanju');
setTimeout(()=>{
    console.log(this.name,'外面');
},1111)

// -------------------------
// fn.bind().bind(a) 等于
// let fn2 = function fn1() {
//     return function() {
//       return fn.apply()
//     }.apply(a)
//   }
//   fn2()
