//假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。在 TS 中，
//我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。
//解答
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X>
  ? X extends Promise<unknown>
    ? MyAwaited<X>
    : X
  : never;

//infer推断
//可以当做设置未知数X,只能在条件类型中设置

type X = MyAwaited<Promise<string>>;
type Y = MyAwaited<Promise<{ field: number }>>;
type Z = MyAwaited<Promise<Promise<string | number>>>;
