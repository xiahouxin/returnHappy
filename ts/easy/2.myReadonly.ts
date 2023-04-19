//例子
interface Todo {
  title: string;
  description: string;
}
type MyReadonly<T> = {
  readonly //[P in keyof T] 遍历一个接口
  //: 赋值
  [P in keyof T]: T[P];
};
const todo11: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};
todo11.title = "Hello"; // Error: cannot reassign a readonly property
todo11.description = "barFoo"; // Error: cannot reassign a readonly property
//ts

//js的实现方式
function myReadonly(obj) {
  const result = {};
  for (const key in obj) {
    result["readonly" + key] = obj[key];
  }
  return result;
}
//1.返回一个对象
//2.遍历obj(js对象 ts接口) //in -> mapped keyof lookup
//3.加上readonly关键字
//4.通过可以获取obj(接口)里面的值
