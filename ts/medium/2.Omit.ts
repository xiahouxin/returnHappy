interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
// type MyOmit<T, K> = {
//   [key in keyof T as key extends K ? never : key]: T[key];
// };

type MyOmit<T, k> = {
  [key in keyof T as key extends K ? never : key]: T[key];
};

type TodoPreview1 = MyOmit<Todo, "description" | "title">;

const todo1s: TodoPreview1 = {
  completed: false,
};
