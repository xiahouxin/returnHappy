//Implement the type version of Array.shift

type Shift<T extends any[]> = T extends [infer R, ...infer Q] ? Q : never;

type Results = Shift<[3, 2, 1]>; // [2, 1]
