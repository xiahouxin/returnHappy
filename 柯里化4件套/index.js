function sub_curry(fn) {
    var args = [].slice.call(arguments, 1)
    return function() {  //fn
      console.log(arguments,'--------');
      var newArgs = args.concat([].slice.call(arguments))
      return fn.apply(this, newArgs)  //fn就是function
    }
  }
  
  
  function curry(fn, length) {
    length = length || fn.length  // 3
    var slice = Array.prototype.slice
  
    return function() {  //fn=》fn('a', 'b')('c')   //fn('a')('b')
      if (arguments.length < length) {
        var combined = [fn].concat(slice.call(arguments)) // [function, a,b]
        return curry(sub_curry.apply(this, combined), length - arguments.length)   // fn('a', 'b')  //fn('a')('b')
      } else {
        return fn.apply(this, arguments)
      }
    }
  }
  
  var fn = curry(function(a, b, c) {
    return [a, b, c]
  })
  // fn('a', 'b', 'c') // ['a', 'b', 'c']
  // fn('a', 'b')('c') // ['a', 'b', 'c']
  fn('a')('b')('c') // ['a', 'b', 'c']  arguments==>a=>b
  // fn('a')('b', 'c') // ['a', 'b', 'c']
  
  console.log(fn('a')('b')('c')('d'));
  