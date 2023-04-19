// 在类型系统里实现通用的 Array.push 。
type Push<T extends any[], k> = [...T, k];

type Result = Push<[1, 2], "3">; // [1, 2, '3']
