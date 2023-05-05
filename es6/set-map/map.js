// const m = new Map()
// const o = {p: 'hello wrold'}

// m.set(o, 'content')
// m.delete(o)
// console.log(m.has(o));
// console.log(m);



// const m = new Map([ ['name', '张三'],['age', 18] ])
// console.log(m.get('name'));
// console.log(m.size);



// let arr = [['name', '张三'], ['age', 18]]
// const m = new Map()
// arr.forEach(([key, value]) => {
//   m.set(key, value)
// })
// console.log(m);



// const set = new Set([
//   ['foo', 1],
//   ['bar', 2]
// ])
// const map = new Map([ ['baz', 3] ])
// const m = new Map(map)
// console.log(m);



// const m = new Map()
// const k1 = ['a']
// const k2 = ['a']

// m.set(k1, 111)
// m.set(k2, 222)

// // console.log(m.get(k1))
// // console.log(m.get(k2))
// m.clear()
// console.log(m);


const map = new Map([
  ['name', '谢大佬'],
  ['age', '20']
])
// map.forEach((value, item) => {
//   console.log(value, item);
// })
// let obj = { a: 1, b: 2}

// for (let item in map) {
//   console.log(item);
// }

// for (let key of map.keys()) {
//   console.log(key);
// } 
// for (let value of map.values()) {
//   console.log(value);
// } 
// for (let item of map.entries()) {
//   console.log(item[0], item[1]);
// } 

// for (let [key, value] of map) {
//   console.log(key, value);
// } 


// const wm = new WeakMap()
// let key = {foo: 1}
// wm.set(key, 2)
// wm.get(key)
// wm.set(1, 2)
// console.log(wm);


const wm = new WeakMap()
const ele = document.getElementById('btn')

ele.addEventListener('click', () => {
  // xxx.removeChild(ele)
})