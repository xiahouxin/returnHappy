//Implement the type version of Array.reverse

type Reverse<T extends any[]> = T extends [infer R, ...infer Q]
  ? [...Reverse<Q>, R]
  : T;
type a24 = Reverse<["a", "b"]>; // ['b', 'a']
type b24 = Reverse<["a", "b", "c"]>; // ['c', 'b', 'a']
