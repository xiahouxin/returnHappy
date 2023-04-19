//实现Trim<T>，它是一个字符串类型，并返回一个新字符串，其中两端的空白符都已被删除。
type TrimLeft<S extends string> = S extends `${" " | "\n" | "\t"}${infer R}`
  ? TrimLeft<R>
  : S;
type TrimRight<S extends string> = S extends `${infer R}${" " | "\n" | "\t"}`
  ? TrimRight<R>
  : S;
type Trim<S extends string> = TrimLeft<TrimRight<S>>;

type trimeds = Trim<"  Hello World  ">; // expected to be 'Hello World'
type aaa<T extends any[]> = {
  [k in keyof T]: k;
};

type bbb = aaa<[3, 4, 5]>;
