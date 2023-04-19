type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];
//ts
//1.通过extends类型条件判断
// type Frist<T extends any[]>=T extends []?never:T[0]
//2.通过length的解法
// type Frist<T extends any[]> = T["length"] extends 0? never:T[0]
//3.通过union类型进行判断
// type Frist<T extends any[]> = T[0] extends T[number] ? T[0] : never
//4.

type Frist<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never;

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
type t1 = Frist<[]>;

//js
function getFirstItem(arr) {
  return arr[0];
}

//知识点
//1.extends类型条件判断
//2.获取tuple的length属性  indexed
//3.通过union类型进行判断
//4.inter的使用(推断)
