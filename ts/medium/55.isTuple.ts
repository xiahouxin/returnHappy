//写一个类型来判断是否为元组类型
type isEqualArr<T extends any, U = number> = U extends T ? false : true;

type IsTuple<T> = [T] extends [never]
  ? false
  : T extends readonly [...params: infer Eles]
  ? isEqualArr<Eles["length"], number>
  : false;

type IsTupleResult = IsTuple<[]>;
type IsTupleResult3 = IsTuple<[number]>;
type IsTupleResult4 = IsTuple<readonly [1]>;
type IsTupleResult5 = IsTuple<{ length: 1 }>;
type IsTupleResult6 = IsTuple<never>;
