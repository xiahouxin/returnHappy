type Test = { id: "1" };

// type Result = AppendToObject<Test, "value", 4>;
type AppendToObject<T, U extends string, V> = {
  //遍历联合类型后进行赋值
  //keyof T | U  ==> [id,value]
  [Property in keyof T | U]: Property extends keyof T ? T[Property] : V;
};
type t1q = AppendToObject<Test, "value", 4>;
