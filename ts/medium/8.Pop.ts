//实现一个通用Pop<T>，它接受一个数组T并返回一个没有最后一个元素的数组。

type arr3 = ["a", "b", "c", "d"];
type arr4 = [3, 2, 1];

type Pop<T extends any[]> = T extends [...A: infer A, B: infer B] ? A : never;

type re1 = Pop<arr3>; // expected to be ['a', 'b', 'c']
type re2 = Pop<arr4>; // expected to be [3, 2]
