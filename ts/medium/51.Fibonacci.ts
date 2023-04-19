//用ts实现斐波那契数
type FibonacciLoop<
  PreArr extends unknown[],
  currentArr extends unknown[],
  IndexArr extends unknown[] = [],
  Num extends number = 1
> = IndexArr["length"] extends Num
  ? currentArr["length"]
  : FibonacciLoop<
      currentArr,
      [...PreArr, ...currentArr],
      [unknown, ...IndexArr],
      Num
    >;
type Fibonacci<T extends number> = FibonacciLoop<[unknown], [], [], T>;
type o1 = Fibonacci<1>;
type o2 = Fibonacci<3>;
type o3 = Fibonacci<8>;
