// vue2的响应式原理
// 数据变化了，可以更新视图

let oldArrayPrototype = Array.prototype;
let proto = Object.create(oldArrayPrototype) // 深拷贝数组原型上的方法，为了不影响原型
Array.from(['push', 'shift', 'unshift']).forEach(method => {
  proto[method] = function() { // 函数劫持
    updateView() // 切片编程
    oldArrayPrototype[method].call(this, ...arguments)
  }
})

function observer(target) { // 观察者
  if (typeof target !== 'object' || target == null) {
    return target
  }
  if (Array.isArray(target)) { // new Array()
    // target.__proto__ = proto
    Object.setPrototypeOf(target, proto)
  }
  for (let key in target) {
    defineReactive(target, key, target[key])
  } 
}

function defineReactive(target, key, value) {
  observer(value) // 递归
  Object.defineProperty(target, key, {
    get() {
      return value
    },
    set(newValue) {
      if (newValue !== value) {
        observer(newValue)
        updateView()
        value = newValue
      }
    }
  })
}

// 如果属性不存在，新增的属性会是响应式的嘛？  不会
function updateView() {
  console.log('更新视图');
}

// 数据劫持 Object.defineProperty
let data = { 
  name: 'wn',
  age: {
    num: 18
  },
  like: [1, 2, 3]
}

observer(data)
// data.name
// data.name = 'lm'
// data.age = { num: 21 }
// data.age.num = 22
// Array.prototype.push = function() {}
data.like.push(4) // 需要对数组上的方法进行重写
console.log(data.like);
