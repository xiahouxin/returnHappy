//1
// var a = 3;
// function c() {
//     alert(a);   //3
// }
// (function () {
//     var a = 4;
//     c();
// })();


//2
// function fun(n, o) {
//     console.log(o);
//     return {
//         fun: function (m) {
//             return fun(m, n);
//         },
//     };
// }
// var a = fun(0);
// a.fun(1);
// a.fun(2);
// a.fun(3);
// var b = fun(0).fun(1).fun(2).fun(3);
// var c = fun(0).fun(1);
// c.fun(2);
// c.fun(3);


//3.
f = function () {
    return true;
};
g = function () {
    return false;
};
(function () {
    if (g() && [] == ![]) {
        f = function f() {
            return false;
        };
        function g() {
            return true;
        }
    }
})();
console.log(f());