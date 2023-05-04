// Symbol([description])

(function() {
  var root = this

  var SymbolPolyfill = function Symbol(description) {
    if (this instanceof SymbolPolyfill) throw new TypeError('Symbol is not a construct')    //判断函数被new

    var descString = description === undefined ? description : String(description)

    var symbol = Object.create(null)
    Object.defineProperties(symbol, {
      '__Description__': {
        value: descString,
        writable: false,  //不可写
        enumerable: false,  //不可被枚举
        configurable: false  //不可遍历
      }
    })

    return symbol
  }

  root.SymbolPolyfill = SymbolPolyfill
})()


let a = SymbolPolyfill('123')
console.log(a);
