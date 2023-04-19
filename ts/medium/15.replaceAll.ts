//实现 ReplaceAll<S, From, To> 将一个字符串 S 中的所有子字符串 From 替换为 To。
type ReplaceAll<
  U extends string,
  From extends string,
  To extends string
> = From extends "" | To
  ? U
  : U extends `${infer L}${From}${infer R}`
  ? `${L}${ReplaceAll<`${To}${R}`, From, To>}`
  : U;

type replaceds = ReplaceAll<"t y p e s", " ", "">; // 期望是 'types'
type replacedss = ReplaceAll<"foboorfoboar", "bo", "b">; // 期望是 'types'
