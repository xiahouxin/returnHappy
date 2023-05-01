function test() {
  var arr = []
  for (var i = 0; i < 10; i++) {

    (function(j) {
      // var j = i
      arr[j] = function () {  //arr[j]和自执行函数形成了闭包
        console.log(j);
      }
    })(i)
    
  }
  return arr
}



var myArr = test() // [function(){}, ...]
// myArr[0]()
// myArr[1]()
for (var j = 0; j < 10; j++) {
  myArr[j]()
}



// !function() {

// }{}