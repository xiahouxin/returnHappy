import { types } from "@babel/core";

//实现一个类型可以比较数字大小
type GreaterThan<
  Num1 extends number,
  Num2 extends number,
  CountArr extends unknown[] = []
> = Num1 extends Num2
  ? false
  : CountArr["length"] extends Num1
  ? false
  : CountArr["length"] extends Num2
  ? true
  : GreaterThan<Num1, Num2, [unknown, ...CountArr]>;

type p1 = GreaterThan<1, 0>;
type p2 = GreaterThan<5, 4>;
type p3 = GreaterThan<4, 5>;
type p4 = GreaterThan<0, 0>;
type p5 = GreaterThan<20, 20>;
type p6 = GreaterThan<10, 100>;
type p7 = GreaterThan<111, 11>;
