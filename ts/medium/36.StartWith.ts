//Implement StartsWith<T, U> which takes two exact string types and returns whether T starts with U
type StartsWith<T extends string, U extends string> = T extends `${U}${string}`
  ? true
  : false;

type a2 = StartsWith<"abc", "ac">; // expected to be false
type b2 = StartsWith<"abc", "ab">; // expected to be true
type c2 = StartsWith<"abc", "abcd">; // expected to be false
