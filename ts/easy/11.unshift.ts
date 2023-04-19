// 在类型系统里实现通用的 Array.unshift 。
type Unshift<T extends any[], K> = [K, ...T];

type Result = Unshift<[1, 2], 0>; // [0, 1, 2,]
