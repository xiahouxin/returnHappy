// 实现一个函数执行出来的结果都是累加的

function test() {
  var count = 0
  count++
  console.log(count);
}

// test() // 1
// test() // 2
// test() // 3
// test() // 4


// 不依赖外部变量，实现累加
// 很难实现，难在函数中没有一个固定不变的变量，每次重新执行函数都会初始化函数中所有的内容


function add() {
  var num = 10
  function a() {
    console.log(++num);
  }
  return a
}
var res = add()
res()
res()
res()
res()