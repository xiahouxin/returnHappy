const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

//知识点
//1.typeof可以把js世界转换成ts世界
//2.as const和const很像,使用了之后不能修改里面的内容
//3.遍历数组通过T[number]

//限制传入的数组类型只能是string|number|symbol数组
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
};
type result = TupleToObject<typeof tuple>;
//js
function ArrToObj(arr) {
  const obj = {};
  for (let key of arr) {
    obj[key] = key;
  }
  return obj;
}
console.log([1, 2, 3]);
//1.返回一个对象
//2.变量arr
