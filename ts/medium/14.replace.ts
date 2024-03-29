//实现 Replace<S, From, To> 将字符串 S 中的第一个子字符串 From 替换为 To 。

type Replace<
  T extends string,
  From extends string,
  To extends string
> = T extends `${infer R}${From}${infer Q}` ? `${R}${To}${Q}` : never;
type replaced = Replace<"types are fun!", "fun", "awesome">; // 期望是 'types are awesome!'
