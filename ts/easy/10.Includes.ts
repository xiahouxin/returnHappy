//在类型系统里实现 JavaScript 的 Array.includes 方法，
//这个类型接受两个参数，返回的类型要么是 true 要么是 false。
type Includes<T extends any[], U> = U extends T[number] ? true : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
type isPillarMen1 = Includes<[1, 2, 3], 2>; // expected to be `false`
