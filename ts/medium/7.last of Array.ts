//实现一个通用Last<T>，它接受一个数组T并返回其最后一个元素的类型。

type array = ["a", "b", "c", "d"];
type array1 = [3, 2, 1];

type Last<T extends any[]> = T extends [...A: infer A, B: infer B] ? B : never;


type res1 = Last<array>; // expected to be "d"
type res2 = Last<array1>; // expected to be 1
