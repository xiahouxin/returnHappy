//实现一个通用MyReadonly2<T, K>，它带有两种类型的参数T和K。
//K指定应设置为Readonly的T的属性集。如果未提供K，则应使所有属性都变为只读，就像普通的Readonly<T>一样。
//例如

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type MyReadonly2<T extends any, U extends keyof T> = {
  readonly [K in U]: T[K];
} & { [key in keyof T as key extends U ? never : key]: T[key] };

const todo2: MyReadonly2<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};
todo2.title = "Hello"; // Error: cannot reassign a readonly property
todo2.description = "barFoo"; // Error: cannot reassign a readonly property
todo2.completed = true; // OK
