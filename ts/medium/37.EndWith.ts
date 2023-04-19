//Implement EndsWith<T, U> which takes two exact string types and returns whether T ends with U
type EndsWith<T extends string, U extends string> = T extends `${string}${U}`
  ? true
  : false;

type a23 = StartsWith<"abc", "bc">; // expected to be false
type b23 = StartsWith<"abc", "ab">; // expected to be true
type c23 = StartsWith<"abc", "abc">; // expected to be true
