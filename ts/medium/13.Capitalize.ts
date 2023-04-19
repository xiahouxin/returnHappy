//实现 Capitalize<T> 它将字符串的第一个字母转换为大写
//其余字母保持原样。
type MyCapitalize<T extends string> = T extends ""
  ? ""
  : T extends `${infer R}${infer Q}`
  ? `${Uppercase<R>}${Q}`
  : never;
type capitalized = Capitalize1<"hello world">; // expected to be 'Hello world'
