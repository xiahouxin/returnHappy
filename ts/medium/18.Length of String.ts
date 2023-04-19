//计算字符串的长度，类似于 String#length 。
type LengthOfString<
  S extends string,
  Result extends any[] = []
> = S extends `${string}${infer Rest}`
  ? LengthOfString<Rest, [unknown, ...Result]>
  : Result["length"];

type s1 = LengthOfString<"">;
type s2 = LengthOfString<"kumiko">;
type s3 = LengthOfString<"reina">;
type s4 = LengthOfString<"Sound! Euphonium">;
