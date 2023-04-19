/* 
  实现 TS 内置的 Pick<T, K>，但不可以使用它。
  从类型 T 中选择出属性 K，构造成一个新的类型。
*/
//例子
//答案
// type MyPick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
type TodoPreview = MyPick<Todo, "title" | "completed">;
const todos: TodoPreview = {
  title: "Clean room",
  completed: false,
};

//js
// function MyPick(todo, keys){
//   const obj
//   keys.forEach(key => {
//     if(key in todo){
//       obj[key] = todo[key]
//     }
//   });
//   return obj
// }
//1.返回一个对象
//2.遍历foreach   //ts里叫mapped
//3.todo[key]取值  //ts里叫indexed
//4.判断key在不在todo里面  //ts里叫lookup
