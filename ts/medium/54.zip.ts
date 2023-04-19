//In This Challenge, You should implement a type Zip<T, U>, T and U must be Tuple
type Zip<T extends any[], U extends any[]> = T extends [infer T1, ...infer TR]
  ? U extends [infer U1, ...infer UR]
    ? [[T1, U1], ...Zip<TR, UR>]
    : []
  : [];
type A1 = a;
type A3 = b;
type A2 = Zip<A1, A3>;
type exp = Zip<[[1, 2]], [3]>; // expected to be [[1, true], [2, false]]

let arr = [{ a: 1 }];
let b = arr.length;
